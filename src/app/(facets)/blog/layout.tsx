import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Breadcrumbs />
      </header>
      {children}
    </>
  );
}
