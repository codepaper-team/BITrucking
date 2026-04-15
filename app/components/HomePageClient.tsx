'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import CtaBanner from './CtaBanner';
import SectionHeading from './SectionHeading';
import { company } from '../lib/company';
import { capabilities } from '../lib/capabilities';
import { truckBuilds } from '../lib/truckBuilds';
import { homePage } from '../lib/home';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePageClient() {
  const { ref: productsRef, isVisible: productsVisible } = useScrollReveal();
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = useScrollReveal();

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 hero-bg-animate bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homePage.hero.media})` }}
        >
          <div className="absolute inset-0 bg-graphite-950/70" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center sm:px-12">
          <div className="max-w-4xl space-y-6">
            <h1
              className="text-5xl uppercase leading-[0.94] tracking-[0.05em] text-white opacity-0 animate-fade-up sm:text-7xl lg:text-8xl"
              style={{ animationDelay: '450ms' }}
            >
              {homePage.hero.title}
            </h1>
            <p
              className="text-xl text-graphite-200 opacity-0 animate-fade-up sm:text-2xl lg:text-3xl"
              style={{ animationDelay: '600ms' }}
            >
              {homePage.hero.description}
            </p>
          </div>
          <div
            className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row"
            style={{ animationDelay: '750ms' }}
          >
            <Link className="btn-primary" href="/contact">
              {company.requestQuoteLabel}
            </Link>
            <Link className="btn-secondary" href="/products">
              View Our Builds
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-pulse-down"
          style={{ animationDelay: '1200ms' }}
        >
          <ChevronDown className="h-7 w-7 text-white/50" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite-950 to-transparent" />
      </section>

      <section className="bg-graphite-950 py-16 sm:py-20">
        <div className="shell">
          <p className="max-w-3xl mx-auto text-justify text-lg leading-8 text-white sm:text-xl">
            {homePage.hero.intro}
          </p>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="shell space-y-10">
          <SectionHeading
            description={homePage.truckBuildsDescription}
            eyebrow="Truck Builds"
            title={homePage.truckBuildsTitle}
          />

          <div
            ref={productsRef}
            className={`grid gap-5 transition-all duration-400 md:grid-cols-2 xl:grid-cols-3 ${
              productsVisible ? 'opacity-100 translate-y-0 animate-reveal-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {truckBuilds.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group relative overflow-hidden rounded-[1.8rem] border border-graphite-800 bg-graphite-950"
                style={{ minHeight: '380px' }}
              >
                <img
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-400 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl uppercase tracking-[0.06em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-graphite-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-black/30" id="more-than-trucks">
        <div className="shell space-y-10">
          <SectionHeading
            description={homePage.moreThanTrucksDescription}
            eyebrow="Capabilities"
            title={homePage.moreThanTrucksTitle}
          />

          <div
            ref={capabilitiesRef}
            className={`grid gap-6 transition-all duration-400 md:grid-cols-2 xl:grid-cols-3 ${
              capabilitiesVisible ? 'opacity-100 translate-y-0 animate-reveal-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {capabilities.map((item) => (
              <article key={item.title} className="panel group relative min-h-[320px] overflow-hidden">
                <img
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-400 group-hover:opacity-80"
                  loading="lazy"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <p className="eyebrow">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-graphite-200">{item.description}</p>
                  {item.to ? (
                    <Link
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-amber-400 transition hover:text-amber-300"
                      href={item.to}
                    >
                      Learn more
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={homePage.cta} />
    </>
  );
}
