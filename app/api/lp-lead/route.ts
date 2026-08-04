import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = process.env.LP_LEAD_TO_EMAIL ?? 'fleet@bitruckbody.com';
const FROM_EMAIL = process.env.LP_LEAD_FROM_EMAIL ?? 'onboarding@resend.dev';
const REPLY_TO = process.env.LP_LEAD_REPLY_TO ?? 'fleet@bitruckbody.com';
const THANK_YOU_PATH = '/lp/thank-you';
const SITE_URL = (() => {
  const raw = process.env.LP_SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'https:') return undefined;
    return parsed.origin;
  } catch {
    return undefined;
  }
})();

function resolveRedirectBase(request: NextRequest): string {
  if (SITE_URL) return SITE_URL;
  const fwdHost = request.headers.get('x-forwarded-host');
  const fwdProto = request.headers.get('x-forwarded-proto');
  if (fwdHost) {
    return `${fwdProto ?? 'https'}://${fwdHost}`;
  }
  const host = request.headers.get('host');
  if (host && !host.startsWith('localhost')) {
    return `https://${host}`;
  }
  return request.url;
}

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const get = (k: string) => (form.get(k)?.toString() ?? '').trim();

  const lead = {
    name: get('name'),
    company: get('company'),
    phone: get('phone'),
    email: get('email'),
    build_type: get('build_type'),
    timeline: get('timeline'),
    chassis: get('chassis'),
    notes: get('notes'),
    landing_page: get('landing_page'),
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_content: get('utm_content'),
    utm_term: get('utm_term'),
    gclid: get('gclid'),
  };

  const subject = `NEW QUOTE (LP): ${lead.build_type || 'General'} — ${lead.name || 'no name'}`;

  const html = `
    <h2>New Landing Page Quote Request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${esc(lead.name)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${esc(lead.company) || '—'}</td></tr>
      <tr><td><strong>Phone</strong></td><td><a href="tel:${esc(lead.phone)}">${esc(lead.phone)}</a></td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${esc(lead.email)}">${esc(lead.email)}</a></td></tr>
      <tr><td><strong>Build type</strong></td><td>${esc(lead.build_type) || '—'}</td></tr>
      <tr><td><strong>Timeline</strong></td><td>${esc(lead.timeline) || '—'}</td></tr>
      <tr><td><strong>Chassis</strong></td><td>${esc(lead.chassis) || '—'}</td></tr>
      <tr><td><strong>Notes</strong></td><td>${esc(lead.notes).replace(/\n/g, '<br>') || '—'}</td></tr>
    </table>
    <h3 style="font-family:Arial,sans-serif;margin-top:24px">Attribution</h3>
    <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px;color:#444">
      <tr><td><strong>Landing page</strong></td><td>${esc(lead.landing_page) || '—'}</td></tr>
      <tr><td><strong>utm_source</strong></td><td>${esc(lead.utm_source) || '—'}</td></tr>
      <tr><td><strong>utm_medium</strong></td><td>${esc(lead.utm_medium) || '—'}</td></tr>
      <tr><td><strong>utm_campaign</strong></td><td>${esc(lead.utm_campaign) || '—'}</td></tr>
      <tr><td><strong>utm_content</strong></td><td>${esc(lead.utm_content) || '—'}</td></tr>
      <tr><td><strong>utm_term</strong></td><td>${esc(lead.utm_term) || '—'}</td></tr>
      <tr><td><strong>gclid</strong></td><td>${esc(lead.gclid) || '—'}</td></tr>
    </table>
  `;

  const text = [
    'New Landing Page Quote Request',
    '',
    `Name: ${lead.name}`,
    `Company: ${lead.company || '—'}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Build type: ${lead.build_type || '—'}`,
    `Timeline: ${lead.timeline || '—'}`,
    `Chassis: ${lead.chassis || '—'}`,
    `Notes: ${lead.notes || '—'}`,
    '',
    'Attribution:',
    `  Landing page: ${lead.landing_page || '—'}`,
    `  utm_source: ${lead.utm_source || '—'}`,
    `  utm_medium: ${lead.utm_medium || '—'}`,
    `  utm_campaign: ${lead.utm_campaign || '—'}`,
    `  utm_content: ${lead.utm_content || '—'}`,
    `  utm_term: ${lead.utm_term || '—'}`,
    `  gclid: ${lead.gclid || '—'}`,
  ].join('\n');

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `BI Truck & Body Lead <${FROM_EMAIL}>`,
        to: TO_EMAIL,
        replyTo: lead.email || REPLY_TO,
        subject,
        html,
        text,
      });
    } catch (err) {
      console.error('[lp-lead] Resend failed, lead preserved in logs:', err);
      console.error('[lp-lead] LEAD:', JSON.stringify(lead));
    }
  } else {
    console.error('[lp-lead] RESEND_API_KEY missing, lead preserved in logs:');
    console.error('[lp-lead] LEAD:', JSON.stringify(lead));
  }

  const redirectBase = resolveRedirectBase(request);
  return NextResponse.redirect(new URL(THANK_YOU_PATH, redirectBase), 303);
}
