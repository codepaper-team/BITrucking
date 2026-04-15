import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Specialty Truck Builds',
  description:
    'Custom truck builds designed to support unique equipment and specialized operations.',
  path: '/products/specialty-build',
  image: '/bi-assets/images/specialty-build.jpg',
  keywords: ['specialty truck builds', 'custom fleet builds', 'specialized work trucks'],
});

function SpecialtyBuild() {
  return (
    <>
      <PageHero
        eyebrow="Truck Builds"
        description="Custom truck builds designed to support unique equipment and specialized operations, including solar power set ups."
        media="/bi-assets/images/specialty-build.jpg"
        mediaAlt="Custom specialty trailer build for specialized equipment transport"
        mediaNote="Specialty Build"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        secondaryAction={{ label: 'View All Builds', to: '/products' }}
        title="Specialty Build"
      />
      <section className="section-space">
        <div className="shell">
          <div className="panel max-w-3xl p-8">
            <p className="eyebrow">Build Overview</p>
            <p className="mt-4 text-lg leading-8 text-graphite-200">
              Custom truck builds designed to support unique equipment and specialized operations, including solar power set ups.
            </p>
            <p className="mt-6 text-sm leading-7 text-graphite-300">
              More details coming soon. Contact BI Truck & Body to discuss your specialty build requirements, custom equipment configurations, and project specifications.
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

export default SpecialtyBuild;
