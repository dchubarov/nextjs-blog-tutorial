'use client';

import { BlogPost as BlogPostModel } from '../lib/model';
import { Text } from '@/components/text';

export default function BlogPost({ post }: { post: BlogPostModel }) {
  return (
    <>
      <Text>
        @{post.author} on{' '}
        {post.lastModifiedAt
          ? `${post.lastModifiedAt.toLocaleString()} (Edited)`
          : post.createdAt.toLocaleString()}
      </Text>
      <Text>{post.content}</Text>
      {post.tags && (
        <div className="flex flex-row gap-1 text-gray-600">
          {post.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      )}
    </>
  );
}
