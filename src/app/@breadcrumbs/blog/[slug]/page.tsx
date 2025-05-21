import Breadcrumbs from '@/components/breadcrumbs';
import { getPost } from '@/features/blog/lib/api';
import { breadcrumbs } from '@/lib/breadcrumbs';

export default async function BreadcrumbsSlot({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <Breadcrumbs
      items={breadcrumbs('blog', {
        pathname: post.slug,
        title: `${post.title}`,
      })}
    />
  );
}
