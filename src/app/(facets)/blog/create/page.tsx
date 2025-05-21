import BlogEntryForm from '../_internal/components/blog-entry-form';
import PageLayout from '@/components/page-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create a post',
};

export default function Page() {
  return (
    <PageLayout.Content title="Create post">
      <BlogEntryForm />
    </PageLayout.Content>
  );
}
