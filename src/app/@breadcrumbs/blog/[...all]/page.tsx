import Breadcrumbs from '@/components/breadcrumbs';
import { breadcrumbs } from '@/lib/breadcrumbs';
import { getPost } from '@/features/blog/lib/api';

export default async function BreadcrumbsSlot({
  params,
}: {
  params: Promise<{ all: string[] }>;
}) {
  const { all } = await params;
  const b = breadcrumbs(...all);
  if (b.length > 1 && b[1].pathname !== 'create') {
    const post = await getPost(b[1].pathname);
    b[1].title = `${post.title} [${post.slug}]`;
  }

  return <Breadcrumbs items={b} />;
}
