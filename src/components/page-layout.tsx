import React from 'react';
import { Heading } from '@/components/heading';

function Content({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      {title && (
        <header>
          <Heading>{title}</Heading>
        </header>
      )}
      {children}
    </div>
  );
}

const PageLayout = {
  Content,
};

export default PageLayout;
