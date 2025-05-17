import { getPost } from '../_internal/lib/api';
import BlogPost from '../_internal/ui/blog-post';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return <BlogPost post={post} />;
}
