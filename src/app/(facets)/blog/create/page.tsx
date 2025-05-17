import Link from 'next/link';
import { createPost } from '../_internal/lib/api';

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Create post</h1>
      <form action={createPost} className="flex flex-col gap-1">
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" name="title" placeholder="Post title" />

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" placeholder="Post content" />

        <label htmlFor="tags">Tags:</label>
        <input
          id="tags"
          type="text"
          name="tags"
          placeholder="Comma-separated tag(s)"
        />

        <div className="flex gap-1">
          <button type="submit" className="text-blue-600">
            Save
          </button>
          <button className="text-red-600">Delete</button>
        </div>
      </form>{' '}
      <Link href="/blog">Navigate to blog</Link>
    </>
  );
}
