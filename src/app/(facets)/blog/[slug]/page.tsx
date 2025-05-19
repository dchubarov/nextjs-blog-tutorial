import { getPost } from '../_internal/lib/api';
import BlogPost from '../_internal/components/blog-post';
import { Heading } from '@/components/heading';
import { TextLink } from '@/components/text';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Heading level={1}>{post.title}</Heading>
      <BlogPost post={post} />
      <TextLink href={`/blog/${post.slug}/edit`}>Edit</TextLink>
    </>
  );
}
