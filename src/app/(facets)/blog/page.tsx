import { getAllPosts } from '@/features/blog/lib/actions';
import BlogPostList from '@/features/blog/components/blog-post-list';
import * as PageLayout from '@/components/page-layout';
import { Button } from '@/components/button';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <PageLayout.Content>
      <Button href="/blog/create" plain>
        Create new
      </Button>
      <BlogPostList posts={posts} />
    </PageLayout.Content>
  );
}
