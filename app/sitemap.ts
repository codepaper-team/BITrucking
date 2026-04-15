import type { MetadataRoute } from 'next';
import { truckBuilds } from './lib/truckBuilds';
import { siteUrl } from './lib/seo';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/powder-coating',
  '/products',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productRoutes = truckBuilds.map((build) => `/products/${build.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/products/') ? 0.8 : 0.7,
  }));
}
