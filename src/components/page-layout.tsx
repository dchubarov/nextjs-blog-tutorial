'use client';

import React, { isValidElement, use } from 'react';
import { BreadcrumbsContext } from '@/lib/breadcrumbs-context';

export function Content({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const breadcrumbs = use(BreadcrumbsContext);
  return (
    <div className="p-4">
      {isValidElement(breadcrumbs) && breadcrumbs}
      {title && (
        <header>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </header>
      )}
      {children}
    </div>
  );
}
