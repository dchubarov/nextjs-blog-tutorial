import { BlogPost } from '../lib/model';
import Link from 'next/link';
import { createOrUpdatePost } from '../lib/api';

export default function BlogEntryForm({ post }: { post?: BlogPost }) {
  return (
    <form action={createOrUpdatePost}>
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
