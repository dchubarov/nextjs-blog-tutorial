import { getAllPosts } from './_internal/lib/api';
import BlogPostList from './_internal/components/blog-post-list';
import Link from 'next/link';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-bold">Blog</h1>
      <BlogPostList posts={posts} />
      <Link href="/blog/create">Create new</Link>
    </>
  );
}
