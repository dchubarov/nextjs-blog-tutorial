import { getAllPosts } from '@/features/blog/lib/actions';

export async function GET() {
  const posts = await getAllPosts();
  return Response.json(posts);
}
