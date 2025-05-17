import { getPost } from '../_internal/lib/api';
import BlogPost from '../_internal/components/blog-post';
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
      <BlogPost post={post} />
      <Link href={`/blog/${post.slug}/edit`}>Edit</Link>
    </>
  );
}
