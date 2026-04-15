import type { Metadata } from 'next';
import { company } from './company';

const fallbackSiteUrl = 'https://bitruckbody.com';

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  fallbackSiteUrl
).replace(/\/+$/, '');

export const siteName = company.name;
export const defaultOgImage = `${siteUrl}/bi-assets/images/storefront.jpg`;

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteUrl}/`).toString();
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image = defaultOgImage,
  keywords = [],
  type = 'website',
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoBodyShop',
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phoneDisplay,
    image: absoluteUrl('/bi-assets/images/storefront.jpg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1291 Lions Club Road Suite 100',
      addressLocality: 'Madison',
      addressRegion: 'GA',
      postalCode: '30650',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Georgia',
      },
    ],
    description: company.footerLine,
  };
}
