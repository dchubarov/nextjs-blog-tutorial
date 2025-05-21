import Breadcrumbs from '@/components/breadcrumbs';

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ all: string[] }>;
}) {
  const all = (await params).all;
  return <Breadcrumbs pages={all} />;
}
