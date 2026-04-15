import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Dump Body Truck Builds',
  description: 'Dump bodies designed for infrastructure, construction, and heavy-duty work.',
  path: '/products/dump-body-truck',
  image: '/bi-assets/images/dump-rear-view.png',
  keywords: ['dump body truck builds', 'custom dump trucks', 'construction truck bodies'],
});

function DumpBodyTruck() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Dump bodies designed for infrastructure, construction, and heavy-duty work."
        media="/bi-assets/images/dump-rear-view.png"
        mediaAlt="Heavy-duty dump body truck rear view for construction and infrastructure work"
        mediaNote="Dump Body Truck"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Dump Body Truck"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Dump bodies designed for infrastructure, construction, and heavy-duty work.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your dump body specifications, dump angle requirements, and fleet timeline.
            </p>
            <Link className="btn-primary mt-8 inline-flex" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DumpBodyTruck;
