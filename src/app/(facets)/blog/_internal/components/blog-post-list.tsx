'use client';

import { BlogPost } from '../lib/model';
import { Text, TextLink } from '@/components/text';

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="list-disc">
      {posts.map((post) => (
        <li key={post.slug}>
          <Text>
            <TextLink href={`/blog/${post.slug}`}>{post.title}</TextLink>
          </Text>
        </li>
      ))}
    </ul>
  );
}
