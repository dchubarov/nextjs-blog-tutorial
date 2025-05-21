'use client';

import _ from 'lodash';
import { Link } from '@/components/link';

export default function Breadcrumbs({ pages }: { pages: string[] }) {
  const buildLink = (i: number) => {
    return i > 0
      ? '/' + pages.slice(0, i).join('/') + `/${pages[i]}`
      : `/${pages[0]}`;
  };

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </Link>
          </div>
        </li>
        {pages.map((page, index) => (
          <li key={page}>
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={buildLink(index)}
                // aria-current={page.current ? 'page' : undefined}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                {_.capitalize(page)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
