'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { BlogPost, FormValidationResult } from '../lib/model';
import { createOrUpdatePost } from '../lib/api';

const initialState: FormValidationResult = { messages: undefined };

export default function BlogEntryForm({ post }: { post?: BlogPost }) {
  const [state, action] = useActionState(createOrUpdatePost, initialState);

  return (
    <form action={action}>
      <div className="flex flex-col gap-1">
        <input type="hidden" name="slug" value={post?.slug} />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={post?.title}
          placeholder="Post title"
          autoFocus
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

        {state.messages && (
          <ul className="list-disc list-inside text-red-600">
            {state.messages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        )}

        <div className="flex gap-1">
          <button type="submit" className="text-blue-600">
            Save
          </button>

          <Link href={post?.slug ? `/blog/${post.slug}` : '/blog'} replace>
            Cancel
          </Link>
        </div>

        {post && (
          <button className="text-red-600" type="button">
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
