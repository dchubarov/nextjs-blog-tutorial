import React from 'react';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Metadata } from 'next';
import BreadcrumbsProvider from '@/components/breadcrumbs-provider';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Next.js Blog Tutorial',
    default: 'Next.js Blog Tutorial',
  },
};

export default function Layout({
  breadcrumbs,
  children,
}: {
  breadcrumbs: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <BreadcrumbsProvider breadcrumbs={breadcrumbs}>
          <main>{children}</main>
        </BreadcrumbsProvider>
      </body>
    </html>
  );
}
