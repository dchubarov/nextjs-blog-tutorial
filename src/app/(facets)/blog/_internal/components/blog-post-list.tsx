'use client';

import { BlogPost } from '../lib/model';
import { TextLink } from '@/components/text';

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="list-disc list-inside">
      {posts.map((post) => (
        <li key={post.slug}>
          <TextLink href={`/blog/${post.slug}`}>{post.title}</TextLink>
        </li>
      ))}
    </ul>
  );
}
