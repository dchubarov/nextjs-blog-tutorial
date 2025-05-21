import Breadcrumbs from '@/components/breadcrumbs';
import { breadcrumbs } from '@/lib/breadcrumbs';

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ all: string[] }>;
}) {
  const all = (await params).all;
  return <Breadcrumbs items={breadcrumbs(...all)} />;
}
