import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Crane-Equipped Utility Truck Builds',
  description: 'Utility trucks equipped with lifting capability for demanding field operations.',
  path: '/products/crane-equipped-utility-truck',
  image: '/bi-assets/images/BI-11.jpg',
  keywords: ['crane truck builds', 'crane-equipped utility truck', 'lifting utility trucks'],
});

function CraneEquippedUtilityTruck() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Utility trucks equipped with lifting capability for demanding field operations."
        media="/bi-assets/images/BI-11.jpg"
        mediaAlt="Crane-equipped utility truck for demanding field operations"
        mediaNote="Crane-Equipped Utility Truck"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Crane-Equipped Utility Truck"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Utility trucks equipped with lifting capability for demanding field operations.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your crane truck specifications, lifting capacity needs, and project timeline.
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

export default CraneEquippedUtilityTruck;
