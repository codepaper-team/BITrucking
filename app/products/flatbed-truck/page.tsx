import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Flatbed Truck Builds',
  description: 'Durable flatbed trucks built to maximize cargo capabilities in rugged environments.',
  path: '/products/flatbed-truck',
  image: '/bi-assets/images/flatbed-corner-shot.png',
  keywords: ['flatbed truck builds', 'custom flatbed truck', 'commercial flatbed bodies'],
});

function FlatbedTruck() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Durable flatbed trucks built to maximize cargo capabilities in rugged environments."
        media="/bi-assets/images/flatbed-corner-shot.png"
        mediaAlt="Custom flatbed truck with rear corner view built for rugged jobsite work"
        mediaNote="Flatbed Truck"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Flatbed Truck"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Durable flatbed trucks built to maximize cargo capabilities in rugged environments.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your flatbed specifications, payload requirements, and delivery timeline.
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

export default FlatbedTruck;
