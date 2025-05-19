import BlogEntryForm from '../_internal/components/blog-entry-form';
import PageLayout from '@/components/page-layout';

export default function Page() {
  return (
    <PageLayout.Content title="Create post">
      <BlogEntryForm />
    </PageLayout.Content>
  );
}
