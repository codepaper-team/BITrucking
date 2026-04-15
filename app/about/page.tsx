import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { company } from '../lib/company';
import { aboutPage } from '../lib/about';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About BI Truck & Body',
  description: aboutPage.paragraphs[0],
  path: '/about',
  image: '/bi-assets/images/tb-campus.jpg',
  keywords: ['about BI Truck and Body', 'truck body company georgia', 'madison ga truck builder'],
});

function About() {
  return (
    <>
      <PageHero
        description="A locally owned truck-body company focused on rugged, practical builds for crews and fleets that rely on their vehicles every day."
        eyebrow="About"
        media="/bi-assets/images/tb-campus.jpg"
        mediaAlt="Aerial view of the BI Truck & Body campus in Madison, Georgia"
        mediaNote="Madison, Georgia"
        primaryAction={{ label: company.requestQuoteLabel, to: '/contact' }}
        secondaryAction={{ label: 'Contact', to: '/contact' }}
        title={aboutPage.title}
      />

      <section className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <SectionHeading eyebrow="Our story" title="Built on practical experience" />
            <div className="space-y-5 text-base leading-8 text-graphite-300 sm:text-lg">
              {aboutPage.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <article className="panel p-6 sm:p-8">
              <p className="eyebrow">Experience</p>
              <h2 className="mt-4 text-4xl uppercase tracking-[0.05em] text-white">
                {aboutPage.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-graphite-300">
                Experience at BI Truck & Body is more than a line item. It directly shapes how we think about
                fabrication, field durability, and the demands contractors and fleet teams face every day.
              </p>
            </article>

            <article className="panel-muted relative min-h-[360px] overflow-hidden">
              <img
                alt="BI Truck &amp; Body facility frontage with completed truck build in Madison, Georgia"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                src="/bi-assets/images/experience-photo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-black/10" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <p className="eyebrow">Team and facility</p>
                <h2 className="mt-4 text-3xl uppercase tracking-[0.05em] text-white">
                  Madison, Georgia
                </h2>
                <p className="mt-4 text-sm leading-7 text-graphite-200">
                  BI Truck &amp; Body storefront and completed work truck in Madison, Georgia.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-black/30">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">What You Can Expect</p>
            <h2 className="text-3xl uppercase tracking-[0.05em] text-white sm:text-4xl">
              What You Can Expect from BI Truck &amp; Body
            </h2>
            <p className="text-base leading-8 text-graphite-300">
              Straightforward partnership and dependable builds
            </p>
          </div>
          <div className="grid gap-4">
            {aboutPage.expectations.map((item, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-5 overflow-hidden rounded-[1.5rem] border border-amber-500/20 bg-graphite-900 px-6 py-5 transition-all duration-300 hover:border-amber-500/50 hover:bg-graphite-900/80"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10">
                  <Check className="h-6 w-6 text-amber-400" />
                </div>
                <p className="text-base font-semibold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        description="Located in Madison, Georgia, our facility supports truck body fabrication, powder coating, and custom vehicle configurations."
        title="Visit Our Facility in Madison, Georgia"
      />
    </>
  );
}

export default About;
