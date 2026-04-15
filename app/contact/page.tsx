import type { Metadata } from 'next';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { company } from '../lib/company';
import { contactPage } from '../lib/contact';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact BI Truck & Body',
  description: contactPage.body,
  path: '/contact',
  image: '/bi-assets/images/storefront.jpg',
  keywords: ['contact truck body builder', 'request truck build quote', 'madison ga truck body'],
});

function Contact() {
  return (
    <>
      <section className="section-space pt-32 sm:pt-36">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <SectionHeading
              description={contactPage.body}
              eyebrow="Get in touch"
              title="Planning a truck build or fleet expansion?"
            />

            <p className="text-sm leading-7 text-graphite-300">
              {contactPage.directCall}
            </p>

            <div className="grid gap-4">
              {[
                { icon: PhoneCall, label: 'Phone', value: company.phoneDisplay, href: company.phoneHref },
                { icon: Mail, label: 'Email', value: company.email, href: company.emailHref },
                { icon: MapPin, label: 'Address', value: company.address },
              ].map((item) => (
                <article key={item.label} className="panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <item.icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          className="text-base text-white transition hover:text-amber-400"
                          href={item.href}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="panel-muted min-h-[220px] p-6">
              <p className="eyebrow">Location</p>
              <h2 className="mt-4 text-3xl uppercase tracking-[0.05em] text-white">
                Madison, Georgia
              </h2>
              <p className="mt-4 text-sm leading-7 text-graphite-300">
                Visit our facility to see BI Truck & Body builds in progress.
              </p>
            </article>
          </div>

          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              allowFullScreen
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=B.I.+Truck+%26+Body,+1291+Lions+Club+Rd,+Madison,+GA+30650&output=embed"
              title="B.I. Truck &amp; Body location map"
            />
          </div>
          <div className="flex justify-end">
            <a
              className="btn-secondary"
              href="https://www.google.com/maps/search/?api=1&query=B.I.+Truck+%26+Body,+1291+Lions+Club+Rd,+Madison,+GA+30650"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
