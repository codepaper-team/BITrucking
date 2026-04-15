import type { Metadata } from 'next';
import BlogPageClient from '../components/BlogPageClient';
import { blogPage } from '../lib/blog';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog and Industry Updates',
  description: blogPage.subheader,
  path: '/blog',
  image: '/bi-assets/images/BI-2.jpg',
  keywords: ['work truck blog', 'fleet news', 'truck body updates'],
  noIndex: true,
});

export default function Blog() {
  return <BlogPageClient />;
}
