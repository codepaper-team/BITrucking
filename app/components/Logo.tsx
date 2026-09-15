import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/app/lib/company';

interface LogoProps {
  linked?: boolean;
  size?: 'header' | 'footer';
}

function Logo({ linked = true, size = 'header' }: LogoProps) {
  const isFooter = size === 'footer';
  const sizeClasses = isFooter
    ? 'w-[136px] sm:w-[152px]'
    : 'w-[190px] sm:w-[220px] lg:w-[240px] xl:w-[260px]';

  const content = (
    <div className={`${sizeClasses} shrink-0 overflow-hidden`}>
      <Image
        src={
          isFooter
            ? '/bi-assets/images/bi-logo-primary.png'
            : '/bi-assets/images/bi-logo-secondary.png'
        }
        alt={company.name}
        width={isFooter ? 1920 : 3684}
        height={isFooter ? 2400 : 1191}
        priority={linked}
        sizes={
          isFooter
            ? '(min-width: 640px) 152px, 136px'
            : '(min-width: 1280px) 260px, (min-width: 1024px) 240px, (min-width: 640px) 220px, 190px'
        }
        className="h-auto w-full [clip-path:inset(1px)] object-contain"
      />
    </div>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link aria-label={company.name} className="block" href="/">
      {content}
    </Link>
  );
}

export default Logo;
