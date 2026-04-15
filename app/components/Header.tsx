'use client';

import { Menu, PhoneCall, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, navItems } from '@/app/lib/company';
import Logo from './Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-800 bg-graphite-950">
      <div className="shell">
        <div className="flex min-h-[92px] items-center justify-between gap-5 xl:min-h-[96px]">
          <Logo />

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.label}
                  className={`text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isActive ? 'text-white' : 'text-graphite-300 hover:text-white'
                  }`}
                  href={item.to}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="btn-secondary" href={company.phoneHref}>
              <PhoneCall className="h-4 w-4" />
              Call
            </a>
            <Link className="btn-primary" href="/contact">
              {company.requestQuoteLabel}
            </Link>
          </div>

          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-graphite-800 bg-graphite-950 lg:hidden">
          <div className="shell py-5">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-graphite-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                  href={item.to}
                >
                  {item.label}
                </Link>
              ))}
              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                <a className="btn-secondary justify-center" href={company.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call
                </a>
                <Link
                  className="btn-primary justify-center"
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                >
                  {company.requestQuoteLabel}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;