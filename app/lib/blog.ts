export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  alt?: string;
}

// Placeholder posts array — replace with API data when CMS is connected
export const blogPosts: BlogPost[] = [];

export const blogPage = {
  title: 'News & Updates',
  subheader: 'Insights from the BI Truck & Body team.',
  emptyState: 'No posts yet — check back soon.',
};