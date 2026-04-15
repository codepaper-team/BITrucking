'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHero from './PageHero';
import { blogPage } from '../lib/blog';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  alt?: string;
}

export default function BlogPageClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={blogPage.title}
        description={blogPage.subheader}
        media="/bi-assets/images/BI-2.jpg"
        mediaAlt="BI Truck & Body blog news and updates"
        mediaNote="News & Updates"
        primaryAction={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="section-space">
        <div className="shell">
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="panel animate-pulse overflow-hidden"
                  style={{ minHeight: '320px' }}
                />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-xl uppercase tracking-[0.1em] text-graphite-400 sm:text-2xl">
                {blogPage.emptyState}
              </p>
              <Link className="btn-primary mt-8" href="/contact">
                Get in Touch
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="panel group cursor-pointer overflow-hidden"
                  style={{ minHeight: '320px' }}
                >
                  {post.image ? (
                    <img
                      alt={post.alt ?? post.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      src={post.image}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-graphite-900 to-graphite-950" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                      {post.date}
                    </p>
                    <h2 className="mt-2 text-xl uppercase tracking-[0.05em] text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-graphite-300">{post.excerpt}</p>
                    <p className="mt-3 text-xs text-graphite-400">By {post.author}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
