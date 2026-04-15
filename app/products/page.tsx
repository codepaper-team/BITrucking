import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { truckBuilds } from '../lib/truckBuilds';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Truck Builds',
  description:
    'Explore custom work truck builds for contractors, utilities, municipalities, and fleet operators.',
  path: '/products',
  image: '/bi-assets/images/BI-27.jpg',
  keywords: ['truck builds', 'work truck bodies', 'fleet truck builds', 'utility trucks'],
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        description="Explore our full lineup of custom work truck builds designed for contractors, utilities, municipalities, and fleet operators."
        media="/bi-assets/images/BI-27.jpg"
        mediaAlt="BI Truck & Body custom work truck builds"
        mediaNote="Madison, Georgia"
        primaryAction={{ label: 'Request a Quote', to: '/contact' }}
        title="Truck Builds"
      />

      <section className="section-space">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {truckBuilds.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group relative overflow-hidden rounded-[1.8rem] border border-graphite-800 bg-graphite-950"
                style={{ minHeight: '380px' }}
              >
                <img
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="text-xl uppercase tracking-[0.06em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-graphite-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
