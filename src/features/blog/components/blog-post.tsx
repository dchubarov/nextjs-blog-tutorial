'use client';

import { BlogPost as BlogPostModel } from '../lib/model';
import { Text } from '@/components/text';
import { Subheading } from '@/components/heading';
import { Badge } from '@/components/badge';

export default function BlogPost({ post }: { post: BlogPostModel }) {
  return (
    <>
      <Subheading>
        @{post.author} on{' '}
        {post.lastModifiedAt
          ? `${post.lastModifiedAt.toLocaleString()} (Edited)`
          : post.createdAt.toLocaleString()}
      </Subheading>
      <Text>{post.content}</Text>
      {post.tags && (
        <div className="flex flex-row gap-1 text-gray-600">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </>
  );
}
