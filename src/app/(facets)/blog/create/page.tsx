import Link from 'next/link';
import { createPost } from '../_internal/lib/api';
import BlogEntryForm from '../_internal/ui/blog-entry-form';

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Create post</h1>
      <form action={createPost}>
        <BlogEntryForm />
      </form>{' '}
      <Link href="/blog">Navigate to blog</Link>
    </>
  );
}
