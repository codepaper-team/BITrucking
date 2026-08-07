import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const fallbackToEmail = 'fleet@bitruckbody.com';
const fallbackFromEmail = 'noreply@bitruckbody.com';
const errorMessage =
  'Something went wrong. Please call (706) 343-4230 or try again.';

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function detailRow(label: string, value: string) {
  return `<tr><th align="left" style="padding:8px 12px;background:#f4f4f4;border:1px solid #ddd;">${escapeHtml(
    label
  )}</th><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(
    value || 'Not provided'
  ).replace(/\n/g, '<br>')}</td></tr>`;
}

function redirectToThankYou() {
  return new NextResponse(null, {
    status: 303,
    headers: {
      Location: '/lp/thank-you',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = getFormValue(formData, 'name');
    const company = getFormValue(formData, 'company');
    const phone = getFormValue(formData, 'phone');
    const email = getFormValue(formData, 'email');
    const buildType = getFormValue(formData, 'build_type');
    const timeline = getFormValue(formData, 'timeline');
    const chassis = getFormValue(formData, 'chassis');
    const notes = getFormValue(formData, 'notes');
    const landingPage = getFormValue(formData, 'landing_page');

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required.' },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const toEmail = process.env.CONTACT_TO_EMAIL || fallbackToEmail;
      const fromEmail = process.env.RESEND_FROM_EMAIL || fallbackFromEmail;
      const source = landingPage || request.headers.get('referer') || 'LP form';
      const trackingFields = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'gclid',
      ];

      const trackingRows = trackingFields
        .map((key) => {
          const value = getFormValue(formData, key);
          return value ? detailRow(key, value) : '';
        })
        .join('');

      await resend.emails.send({
        from: `BI Truck & Body <${fromEmail}>`,
        to: toEmail,
        subject: `New LP Quote Request: ${buildType || 'Truck Body'}`,
        html: `
          <h2>New Landing Page Quote Request</h2>
          <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
            ${detailRow('Name', name)}
            ${detailRow('Company', company)}
            ${detailRow('Phone', phone)}
            ${detailRow('Email', email)}
            ${detailRow('Build Type', buildType)}
            ${detailRow('Timeline', timeline)}
            ${detailRow('Chassis', chassis)}
            ${detailRow('Notes', notes)}
            ${detailRow('Landing Page', source)}
            ${trackingRows}
          </table>
        `,
      });
    }

    return redirectToThankYou();
  } catch (error) {
    console.error('LP lead API error:', error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
