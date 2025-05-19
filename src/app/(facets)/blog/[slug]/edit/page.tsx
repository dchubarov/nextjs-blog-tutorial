import { getPost } from '../../_internal/lib/api';
import BlogEntryForm from '../../_internal/components/blog-entry-form';
import PageLayout from '@/components/page-layout';

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
