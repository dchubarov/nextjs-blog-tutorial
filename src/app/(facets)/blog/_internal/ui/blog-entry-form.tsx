'use client';

import { BlogPost } from '../lib/model';

export default function BlogEntryForm({ post }: { post?: BlogPost }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        defaultValue={post?.title}
        autoFocus
        placeholder="Post title"
      />

      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        name="content"
        defaultValue={post?.content}
        placeholder="Post content"
      />

      <label htmlFor="tags">Tags:</label>
      <input
        id="tags"
        type="text"
        name="tags"
        defaultValue={post?.tags?.join(', ')}
        placeholder="Comma-separated tag(s)"
      />

      <div className="flex gap-1">
        <button type="submit" className="text-blue-600">
          Save
        </button>
        {post && <button className="text-red-600">Delete</button>}
      </div>
    </div>
  );
}
