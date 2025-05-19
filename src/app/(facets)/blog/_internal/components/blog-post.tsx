'use client';

import { BlogPost as BlogPostModel } from '../lib/model';

export default function BlogPost({ post }: { post: BlogPostModel }) {
  return (
    <>
      <p className="text-gray-600">
        @{post.author} on{' '}
        {post.lastModifiedAt
          ? `${post.lastModifiedAt.toLocaleString()} (Edited)`
          : post.createdAt.toLocaleString()}
      </p>
      <p>{post.content}</p>
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
