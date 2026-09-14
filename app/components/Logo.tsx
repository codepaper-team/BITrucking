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
    ? 'w-[104px] sm:w-[120px]'
    : 'w-[58px] sm:w-[62px] lg:w-[66px] xl:w-[70px]';

  const content = (
    <div className={`${sizeClasses} shrink-0 overflow-hidden`}>
      <Image
        src="/bi-assets/images/bi-logo-primary.png"
        alt={company.name}
        width={isFooter ? 1920 : 3684}
        height={isFooter ? 2400 : 1191}
        priority={linked}
        sizes={
          isFooter
            ? '(min-width: 640px) 120px, 104px'
            : '(min-width: 1280px) 70px, (min-width: 1024px) 66px, (min-width: 640px) 62px, 58px'
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
