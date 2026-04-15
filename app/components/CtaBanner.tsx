import Link from 'next/link';
import { company } from '@/app/lib/company';

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  to?: string;
}

function CtaBanner({
  title,
  description,
  primaryLabel = company.requestQuoteLabel,
  to = '/contact',
}: CtaBannerProps) {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-graphite-900 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="absolute inset-y-0 left-0 w-1 bg-amber-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_38%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Request a Quote</p>
              <h2 className="text-balance text-4xl uppercase tracking-[0.05em] text-white sm:text-5xl">
                {title}
              </h2>
              {description ? <p className="text-base text-graphite-300 sm:text-lg">{description}</p> : null}
            </div>
            <Link className="btn-primary animate-glow-pulse" href={to}>
              {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;