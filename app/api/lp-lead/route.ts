import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const toEmail =
  process.env.CONTACT_TO_EMAIL ??
  process.env.LP_LEAD_TO_EMAIL ??
  'fleet@bitruckbody.com';
const fromEmail =
  process.env.RESEND_FROM_EMAIL ??
  process.env.LP_LEAD_FROM_EMAIL ??
  'noreply@bitruckbody.com';
const replyToEmail = process.env.LP_LEAD_REPLY_TO ?? toEmail;
const thankYouPath = '/lp/thank-you';
const deliveryError =
  'Something went wrong. Please call (706) 343-4230 or try again.';
const sheetWebhookUrl =
  'https://script.google.com/macros/s/AKfycbzE6mVVDU4Dkj2ZOAMJNZH7DpEoSrup1m2oLmLI1v5I1wXsA_Q6sY4KEdUiVz20FXDZ/exec';
const sheetWebhookSecret = 'tkVlaQqzUQVOvGVILezy6hBlR8GLXSuW';

type Lead = {
  name: string;
  company: string;
  phone: string;
  email: string;
  buildType: string;
  timeline: string;
  chassis: string;
  notes: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  gclid: string;
};

function getSiteUrl() {
  const raw = (
    process.env.LP_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    ''
  ).trim();

  if (!raw) {
    return '';
  }

  try {
    const parsed = new URL(raw);
    return parsed.protocol === 'https:' ? parsed.origin : '';
  } catch {
    return '';
  }
}

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

function emptyFallback(value: string) {
  return value || 'Not provided';
}

function detailRow(label: string, value: string) {
  return `<tr><th align="left" style="padding:8px 12px;background:#f4f4f4;border:1px solid #ddd;">${escapeHtml(
    label
  )}</th><td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(
    emptyFallback(value)
  ).replace(/\n/g, '<br>')}</td></tr>`;
}

function redirectToThankYou() {
  const siteUrl = getSiteUrl();

  if (siteUrl) {
    return NextResponse.redirect(new URL(thankYouPath, siteUrl), 303);
  }

  return new NextResponse(null, {
    status: 303,
    headers: {
      Location: thankYouPath,
    },
  });
}

function sendSheetWebhook(lead: Lead) {
  void fetch(sheetWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'newLead',
      secret: sheetWebhookSecret,
      name: lead.name,
      company: lead.company,
      phone: lead.phone,
      email: lead.email,
      buildType: lead.buildType,
      timeline: lead.timeline,
      chassis: lead.chassis,
      notes: lead.notes,
      utm_source: lead.utmSource,
      utm_medium: lead.utmMedium,
      utm_campaign: lead.utmCampaign,
      utm_term: lead.utmTerm,
      utm_content: lead.utmContent,
      gclid: lead.gclid,
      landingPage: lead.landingPage,
    }),
  }).catch((error) => console.error('[lp-lead] Sheet webhook failed', error));
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const lead: Lead = {
    name: getFormValue(formData, 'name'),
    company: getFormValue(formData, 'company'),
    phone: getFormValue(formData, 'phone'),
    email: getFormValue(formData, 'email'),
    buildType: getFormValue(formData, 'build_type'),
    timeline: getFormValue(formData, 'timeline'),
    chassis: getFormValue(formData, 'chassis'),
    notes: getFormValue(formData, 'notes'),
    landingPage:
      getFormValue(formData, 'landing_page') ||
      request.headers.get('referer') ||
      'LP form',
    utmSource: getFormValue(formData, 'utm_source'),
    utmMedium: getFormValue(formData, 'utm_medium'),
    utmCampaign: getFormValue(formData, 'utm_campaign'),
    utmContent: getFormValue(formData, 'utm_content'),
    utmTerm: getFormValue(formData, 'utm_term'),
    gclid: getFormValue(formData, 'gclid'),
  };

  if (!lead.name || !lead.phone || !lead.email) {
    return NextResponse.json(
      { error: 'Name, phone, and email are required.' },
      { status: 400 }
    );
  }

  const html = `
    <h2>New Landing Page Quote Request</h2>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      ${detailRow('Name', lead.name)}
      ${detailRow('Company', lead.company)}
      ${detailRow('Phone', lead.phone)}
      ${detailRow('Email', lead.email)}
      ${detailRow('Build Type', lead.buildType)}
      ${detailRow('Timeline', lead.timeline)}
      ${detailRow('Chassis', lead.chassis)}
      ${detailRow('Notes', lead.notes)}
      ${detailRow('Landing Page', lead.landingPage)}
      ${detailRow('utm_source', lead.utmSource)}
      ${detailRow('utm_medium', lead.utmMedium)}
      ${detailRow('utm_campaign', lead.utmCampaign)}
      ${detailRow('utm_content', lead.utmContent)}
      ${detailRow('utm_term', lead.utmTerm)}
      ${detailRow('gclid', lead.gclid)}
    </table>
  `;

  const text = [
    'New Landing Page Quote Request',
    '',
    `Name: ${lead.name}`,
    `Company: ${emptyFallback(lead.company)}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Build Type: ${emptyFallback(lead.buildType)}`,
    `Timeline: ${emptyFallback(lead.timeline)}`,
    `Chassis: ${emptyFallback(lead.chassis)}`,
    `Notes: ${emptyFallback(lead.notes)}`,
    `Landing Page: ${emptyFallback(lead.landingPage)}`,
    `utm_source: ${emptyFallback(lead.utmSource)}`,
    `utm_medium: ${emptyFallback(lead.utmMedium)}`,
    `utm_campaign: ${emptyFallback(lead.utmCampaign)}`,
    `utm_content: ${emptyFallback(lead.utmContent)}`,
    `utm_term: ${emptyFallback(lead.utmTerm)}`,
    `gclid: ${emptyFallback(lead.gclid)}`,
  ].join('\n');

  if (!process.env.RESEND_API_KEY) {
    console.error('[lp-lead] RESEND_API_KEY missing, lead preserved in logs:');
    console.error('[lp-lead] Lead:', JSON.stringify(lead));
    return NextResponse.json({ error: deliveryError }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `BI Truck & Body Lead <${fromEmail}>`,
      to: toEmail,
      replyTo: lead.email || replyToEmail,
      subject: `New LP Quote Request: ${lead.buildType || 'Truck Body'}`,
      html,
      text,
    });

    if (result.error) {
      throw result.error;
    }
  } catch (error) {
    console.error('[lp-lead] Resend failed, lead preserved in logs:', error);
    console.error('[lp-lead] Lead:', JSON.stringify(lead));
    return NextResponse.json({ error: deliveryError }, { status: 500 });
  }

  sendSheetWebhook(lead);

  return redirectToThankYou();
}
