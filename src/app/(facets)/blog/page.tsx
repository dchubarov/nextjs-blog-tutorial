import { getAllPosts } from './_internal/lib/api';
import BlogPostList from './_internal/components/blog-post-list';
import PageLayout from '@/components/page-layout';
import { Button } from '@/components/button';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <PageLayout.Content title="Recent entries">
      <BlogPostList posts={posts} />
      <Button href="/blog/create" plain>
        Create new
      </Button>
    </PageLayout.Content>
  );
}
