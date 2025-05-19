import { getPost } from '../../_internal/lib/api';
import BlogEntryForm from '../../_internal/components/blog-entry-form';
import { Heading } from '@/components/heading';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Heading level={1}>Edit - {post.title}</Heading>
      <BlogEntryForm post={post} />
    </>
  );
}
