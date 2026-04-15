import type { Metadata } from 'next';
import { truckBuilds } from '../lib/truckBuilds';
import { homePage } from '../lib/home';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Truck Builds Gallery',
  description: homePage.truckBuildsDescription,
  path: '/truck-builds',
  image: '/bi-assets/images/BI-27.jpg',
  keywords: ['truck builds gallery', 'custom truck body gallery', 'work truck examples'],
  noIndex: true,
});

function TruckBuilds() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-white/10 bg-graphite-950 pt-28 sm:pt-32">
        <div className="shell pb-12 sm:pb-16">
          <p className="eyebrow">Our Work</p>
          <h1 className="mt-4 text-5xl uppercase tracking-[0.05em] text-white sm:text-6xl lg:text-7xl">
            {homePage.truckBuildsTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite-300 sm:text-xl">
            {homePage.truckBuildsDescription}
          </p>
        </div>
      </section>

      {/* Truck build cards */}
      <section className="section-space">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {truckBuilds.map((item) => (
              <article
                key={item.slug}
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TruckBuilds;
