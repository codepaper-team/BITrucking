import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroAction {
  label: string;
  href?: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  intro?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  media?: string;
  mediaAlt?: string;
  mediaNote?: string;
  chips?: string[];
  mediaPosition?: 'left' | 'right';
  supportingCard?: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel?: string;
    to?: string;
  };
}

function HeroAction({ action, primary = false }: { action?: HeroAction; primary?: boolean }) {
  if (!action) return null;

  const className = primary ? 'btn-primary' : 'btn-secondary';

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} href={action.to ?? '/'}>
      {action.label}
    </Link>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
  intro,
  primaryAction,
  secondaryAction,
  media,
  mediaAlt,
  mediaNote,
  chips = [],
  mediaPosition = 'right',
  supportingCard,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-graphite-950 pt-28 sm:pt-32">
      <div className="hero-noise absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="shell relative pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          {mediaPosition === 'left' ? (
            <>
              <div className="relative">
                <div className="media-frame overflow-hidden rounded-[2rem]">
                  {media ? (
                    <img
                      alt={mediaAlt ?? ''}
                      className="h-[420px] w-full object-cover sm:h-[540px] lg:h-[660px]"
                      src={media}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-tr from-graphite-950/82 via-graphite-950/30 to-transparent" />
                  {mediaNote ? (
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {mediaNote}
                    </span>
                  ) : null}
                </div>
                {supportingCard ? (
                  <div className="panel absolute -bottom-6 left-4 right-4 p-4 sm:left-auto sm:right-6 sm:w-[300px] sm:p-5">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                        {supportingCard.eyebrow}
                      </p>
                      <h2 className="text-2xl uppercase tracking-[0.05em] text-white">
                        {supportingCard.title}
                      </h2>
                      <p className="text-sm text-graphite-300">{supportingCard.description}</p>
                      {supportingCard.to ? (
                        <Link
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:text-amber-400"
                          href={supportingCard.to}
                        >
                          {supportingCard.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="space-y-8 lg:py-8">
                {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                <div className="space-y-5">
                  <h1 className="text-5xl uppercase leading-[0.94] tracking-[0.05em] text-white sm:text-6xl lg:text-7xl">
                    {title}
                  </h1>
                  {description ? (
                    <p className="text-lg text-graphite-300 sm:text-xl">{description}</p>
                  ) : null}
                  {intro ? (
                    <p className="text-base leading-7 text-graphite-300 sm:text-lg">{intro}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <HeroAction action={primaryAction} primary />
                  <HeroAction action={secondaryAction} />
                </div>
                {chips.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-200"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div className="space-y-8 lg:py-8">
                {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-balance text-5xl uppercase leading-[0.94] tracking-[0.05em] text-white sm:text-6xl lg:text-7xl">
                    {title}
                  </h1>
                  {description ? (
                    <p className="max-w-2xl text-lg text-graphite-300 sm:text-xl">{description}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <HeroAction action={primaryAction} primary />
                  <HeroAction action={secondaryAction} />
                </div>
                {chips.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-200"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <div className="media-frame overflow-hidden rounded-[2rem]">
                  {media ? (
                    <img
                      alt={mediaAlt ?? ''}
                      className="h-[420px] w-full object-cover sm:h-[540px] lg:h-[660px]"
                      src={media}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-tr from-graphite-950/82 via-graphite-950/30 to-transparent" />
                  {mediaNote ? (
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {mediaNote}
                    </span>
                  ) : null}
                </div>
                {supportingCard ? (
                  <div className="panel absolute -bottom-6 left-4 right-4 p-4 sm:left-auto sm:right-6 sm:w-[300px] sm:p-5">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                        {supportingCard.eyebrow}
                      </p>
                      <h2 className="text-2xl uppercase tracking-[0.05em] text-white">
                        {supportingCard.title}
                      </h2>
                      <p className="text-sm text-graphite-300">{supportingCard.description}</p>
                      {supportingCard.to ? (
                        <Link
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:text-amber-400"
                          href={supportingCard.to}
                        >
                          {supportingCard.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;