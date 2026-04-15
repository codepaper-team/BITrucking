import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';
import { homePage } from './lib/home';
import { buildMetadata } from './lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Custom Work Trucks for Contractors, Crews, and Fleets',
  description: homePage.hero.intro,
  path: '/',
  image: homePage.hero.media,
  keywords: [
    'custom work trucks',
    'truck body builders georgia',
    'fleet truck upfitting',
    'service body trucks',
    'madison ga truck body',
  ],
});

export default function Home() {
  return <HomePageClient />;
}
