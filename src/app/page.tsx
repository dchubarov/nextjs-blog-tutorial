import * as PageLayout from '@/components/page-layout';
import { Button } from '@/components/button';

export default function Page() {
  return (
    <PageLayout.Content title="Homepage">
      <Button href="/blog" plain>
        Blog
      </Button>
      <Button href="/about" plain>
        About
      </Button>
    </PageLayout.Content>
  );
}
