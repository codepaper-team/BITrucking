import type { Metadata } from 'next';
import { Barlow_Condensed, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { company } from './lib/company';
import { absoluteUrl, getOrganizationJsonLd, siteName, siteUrl } from './lib/seo';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.headline}`,
    template: `%s | ${siteName}`,
  },
  description: company.footerLine,
  applicationName: siteName,
  keywords: [
    'custom work trucks',
    'truck body fabrication',
    'powder coating georgia',
    'fleet truck builds',
    'service body trucks',
  ],
  alternates: {
    canonical: '/',
  },
  category: 'business',
  openGraph: {
    title: `${company.name} | ${company.headline}`,
    description: company.footerLine,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: absoluteUrl('/bi-assets/images/storefront.jpg'),
        width: 1200,
        height: 630,
        alt: `${company.name} storefront in Madison, Georgia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.headline}`,
    description: company.footerLine,
    images: [absoluteUrl('/bi-assets/images/storefront.jpg')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <html lang="en" className={`${barlowCondensed.variable} ${ibmPlexSans.variable}`}>
      <body className="min-h-screen bg-graphite-950 font-sans text-graphite-200 antialiased">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          type="application/ld+json"
        />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-graphite-950"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
