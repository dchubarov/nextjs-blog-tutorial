import BlogEntryForm from '../_internal/components/blog-entry-form';
import { Heading } from '@/components/heading';

export default function Page() {
  return (
    <>
      <Heading level={1}>Create post</Heading>
      <BlogEntryForm />
    </>
  );
}
