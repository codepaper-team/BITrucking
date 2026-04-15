'use client';

import Link from 'next/link';
import { company, navItems } from '@/app/lib/company';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="border-t-4 border-amber-600 bg-graphite-950">
      <div className="shell py-16 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo linked={false} size="footer" />
            <p className="max-w-xl text-base leading-8 text-graphite-300">{company.footerLine}</p>
            {/* Newsletter form */}
            <div className="mt-4 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Newsletter</p>
              <p className="text-xs text-graphite-400">Get updates on new builds and services.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="field-input flex-1 min-w-0 text-sm"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="btn-primary whitespace-nowrap text-sm" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</p>
            <div className="grid gap-3 text-sm text-graphite-300">
              {navItems.map((item) => (
                <Link key={item.label} className="transition hover:text-white" href={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</p>
            <div className="grid gap-3 text-sm text-graphite-300">
              <p className="max-w-sm leading-7">{company.address}</p>
              <a
                className="text-lg font-semibold tracking-[0.04em] text-white transition hover:text-amber-400"
                href={company.phoneHref}
              >
                {company.phoneDisplay}
              </a>
              <a className="transition hover:text-white" href={company.emailHref}>
                {company.email}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <iframe
              allowFullScreen
              className="h-[200px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=B.I.+Truck+%26+Body,+1291+Lions+Club+Rd,+Madison,+GA+30650&output=embed"
              title="B.I. Truck &amp; Body location map"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-graphite-500">
          <div className="flex items-center justify-center gap-3">
            <span>American Made</span>
            <img alt="USA badge" className="h-6 w-auto object-contain" src="/usa-badge.jpeg" />
          </div>
          <div className="mt-2 text-center">
            Copyright © 2025 BI Truck &amp; Body. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
