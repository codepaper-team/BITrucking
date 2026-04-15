import { NextResponse } from 'next/server';
import { blogPosts } from '@/app/lib/blog';

export async function GET() {
  return NextResponse.json({ posts: blogPosts });
}