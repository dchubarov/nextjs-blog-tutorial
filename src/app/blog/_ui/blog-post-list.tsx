'use client';

import Link from 'next/link';
import { BlogPost } from '../_lib/model';

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="list-disc list-inside">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
