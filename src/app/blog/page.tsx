import { getPosts } from './_lib/api';
import BlogPostList from './_ui/blog-post-list';

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl font-bold">Blog</h1>
      <BlogPostList posts={posts} />
    </>
  );
}
