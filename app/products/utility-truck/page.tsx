import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Utility Truck Builds',
  description:
    'Service body trucks designed for contractors, utilities, municipal services, and field crews.',
  path: '/products/utility-truck',
  image: '/bi-assets/images/BI-6.jpg',
  keywords: ['utility truck builds', 'service body trucks', 'contractor utility trucks'],
});

function UtilityTruck() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Service body trucks designed for the unique needs of contractors, utilities, municipal services, and field crews."
        media="/bi-assets/images/BI-6.jpg"
        mediaAlt="Custom utility truck build for contractors and field crews"
        mediaNote="Utility Truck"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Utility Truck"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Service body trucks designed for the unique needs of contractors, utilities, municipal services, and field crews.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your utility truck specifications, timeline, and fleet requirements.
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

export default UtilityTruck;
