import { getPost } from '../_internal/lib/api';
import BlogPost from '../_internal/components/blog-post';
import PageLayout from '@/components/page-layout';
import { Button } from '@/components/button';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
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
    <PageLayout.Content title={post.title}>
      <BlogPost post={post} />
      <Button href={`/blog/${post.slug}/edit`} plain>
        Edit
      </Button>
    </PageLayout.Content>
  );
}
