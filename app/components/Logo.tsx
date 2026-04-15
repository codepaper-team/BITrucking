import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/app/lib/company';

interface LogoProps {
  linked?: boolean;
  size?: 'header' | 'footer';
}

function Logo({ linked = true, size = 'header' }: LogoProps) {
  const sizeClasses =
    size === 'footer'
      ? 'w-[180px] sm:w-[220px]'
      : 'w-[132px] sm:w-[152px] lg:w-[164px] xl:w-[176px]';

  const content = (
    <div className={`${sizeClasses} shrink-0`}>
      <Image
        src="/bi-assets/images/bi-logo.png"
        alt={company.name}
        width={720}
        height={384}
        priority={linked}
        quality={100}
        sizes={
          size === 'footer'
            ? '(min-width: 640px) 220px, 180px'
            : '(min-width: 1280px) 176px, (min-width: 1024px) 164px, (min-width: 640px) 152px, 132px'
        }
        className="h-auto w-full object-contain"
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
