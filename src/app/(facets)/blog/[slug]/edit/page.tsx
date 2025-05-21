import { getPost } from '../../_internal/lib/api';
import BlogEntryForm from '../../_internal/components/blog-entry-form';
import PageLayout from '@/components/page-layout';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: `Edit ${post.title}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <PageLayout.Content title={`Edit - ${post.title}`}>
      <BlogEntryForm post={post} />
    </PageLayout.Content>
  );
}
