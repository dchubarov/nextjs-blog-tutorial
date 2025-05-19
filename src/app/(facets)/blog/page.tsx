import { getAllPosts } from './_internal/lib/api';
import BlogPostList from './_internal/components/blog-post-list';
import { Heading } from '@/components/heading';
import { TextLink } from '@/components/text';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading level={1}>Blog</Heading>
      <BlogPostList posts={posts} />
      <TextLink href="/blog/create">Create new</TextLink>
    </>
  );
}
