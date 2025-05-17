import { getPost } from '../../_internal/lib/api';
import BlogEntryForm from '../../_internal/components/blog-entry-form';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <h1 className="text-3xl font-bold">Edit - {post.title}</h1>
      <form>
        <BlogEntryForm post={post} />
      </form>{' '}
      <Link href={`/blog/${slug}`} replace>
        Cancel
      </Link>
    </>
  );
}
