import type { Metadata } from 'next';
import CtaBanner from '../components/CtaBanner';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { company } from '../lib/company';
import { powderCoatingPage } from '../lib/powderCoating';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Commercial and Industrial Powder Coating Services',
  description: powderCoatingPage.intro[0],
  path: '/powder-coating',
  image: '/bi-assets/images/powder-coating-main.jpg',
  keywords: [
    'powder coating georgia',
    'commercial powder coating',
    'industrial powder coating',
    'oversized powder coating',
  ],
});

function PowderCoating() {
  return (
    <>
      <PageHero
        description="Commercial and industrial finishing support for fabricated equipment, truck accessories, and oversized metal components."
        eyebrow="Powder Coating"
        media="/bi-assets/images/powder-coating-main.jpg"
        mediaAlt="Technician applying powder coating in the BI Truck & Body finishing booth"
        mediaNote="Commercial finishing"
        primaryAction={{ label: company.requestQuoteLabel, to: '/contact' }}
        secondaryAction={{ label: 'Call Now', href: company.phoneHref }}
        title={powderCoatingPage.title}
      />

      <section className="section-space">
        <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <SectionHeading eyebrow="Service overview" title="Durable finishes for demanding environments" />
            <div className="space-y-5 text-base leading-8 text-graphite-300 sm:text-lg">
              {powderCoatingPage.intro.slice(0, 3).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="panel space-y-5 p-6 sm:p-8">
            <p className="eyebrow">Applications</p>
            <ul className="grid gap-3 text-sm leading-7 text-graphite-200">
              {powderCoatingPage.applications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-black/30">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <article className="panel relative min-h-[400px] overflow-hidden p-8">
              <div className="relative z-10 space-y-4">
                <p className="eyebrow">Oversized Capability</p>
                <div className="space-y-2">
                  <p className="text-8xl font-heading font-bold uppercase tracking-[0.05em] text-amber-500">
                    {powderCoatingPage.ovenLength}
                  </p>
                  <p className="text-3xl uppercase tracking-[0.05em] text-white">Powder Coating Oven</p>
                </div>
                <p className="text-base leading-8 text-graphite-300">
                  Our 33-foot oven allows us to handle oversized items while delivering durable finishes built for demanding environments.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-graphite-900/80 to-graphite-950/60" />
            </article>

            <article className="panel-muted relative min-h-[400px] overflow-hidden">
              <img
                alt="Technician applying powder coating to fabricated metal equipment in an industrial booth"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                src="/bi-assets/images/powder-coating-main.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
              <div className="absolute inset-0 flex h-full flex-col justify-end p-8">
                <p className="eyebrow">Process</p>
                <h2 className="mt-4 text-3xl uppercase tracking-[0.05em] text-white">
                  Durable finishes for fabricated equipment and oversized components
                </h2>
                <p className="mt-4 text-sm leading-7 text-graphite-200">
                  Whether finishing truck equipment or specialty components, our experienced team helps protect metal surfaces for long-term performance.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="panel p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <p className="eyebrow">Discuss your project</p>
                <h2 className="text-3xl uppercase tracking-[0.05em] text-white sm:text-4xl">
                  Commercial and industrial finishing
                </h2>
                <p className="text-base leading-8 text-graphite-300 sm:text-lg">
                  {powderCoatingPage.intro[4]}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-start lg:items-start">
                <a className="btn-secondary justify-center" href={company.phoneHref}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Call: {company.phoneDisplay}
                </a>
                <a className="btn-secondary justify-center" href={company.emailHref}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        description="Share your part sizes, coating requirements, and timing, and we'll help scope the next step."
        title="Need finishing services for fabricated metal components?"
      />
    </>
  );
}

export default PowderCoating;
