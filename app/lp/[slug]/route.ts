import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const allowedSlugs = new Set([
  'custom-truck-bodies',
  'service-bodies',
  'flatbed-dump-bodies',
  'fleet-upfitting',
  'van-bodies',
  'thank-you',
]);

type RouteContext = {
  params: Promise<{ slug: string }> | { slug: string };
};

async function getSlug(context: RouteContext) {
  const params = await context.params;
  return params.slug;
}

async function readLandingPage(slug: string) {
  if (!allowedSlugs.has(slug)) {
    return null;
  }

  return readFile(join(process.cwd(), 'public', 'lp', slug, 'index.html'), 'utf8');
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const slug = await getSlug(context);
  const html = await readLandingPage(slug);

  if (!html) {
    return new NextResponse('Not found', { status: 404 });
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

export async function HEAD(_request: NextRequest, context: RouteContext) {
  const slug = await getSlug(context);
  const html = await readLandingPage(slug);

  return new NextResponse(null, {
    status: html ? 200 : 404,
    headers: html
      ? {
          'Content-Type': 'text/html; charset=utf-8',
        }
      : undefined,
  });
}
