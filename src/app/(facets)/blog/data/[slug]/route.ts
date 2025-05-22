import { getPost } from '@/features/blog/lib/actions';

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const post = await getPost(slug);
  if (!post) {
    return new Response(null, { status: 404 });
  }
  return Response.json(post);
}
