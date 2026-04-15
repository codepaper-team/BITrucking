import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Service Van Builds',
  description: 'Van builds for contractors and delivery fleets requiring organized mobile workspaces.',
  path: '/products/service-van',
  image: '/bi-assets/images/BI-15.jpg',
  keywords: ['service van builds', 'commercial service vans', 'fleet van upfitting'],
});

function ServiceVan() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Van builds for contractors and delivery fleets requiring organized mobile workspaces."
        media="/bi-assets/images/BI-15.jpg"
        mediaAlt="Commercial service van build for contractors and delivery fleets"
        mediaNote="Service Van"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Service Van"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Van builds for contractors and delivery fleets requiring organized mobile workspaces.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your service van layout, shelving, equipment storage, and fleet configuration needs.
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

export default ServiceVan;
