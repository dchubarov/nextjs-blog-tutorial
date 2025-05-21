'use client';

import _ from 'lodash';
import { Link } from '@/components/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/blog" className="text-gray-400 hover:text-gray-500">
              Blog
            </Link>
          </div>
        </li>
        {segments.map((segment) => (
          <li key={_.capitalize(segment)}>
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={segment}
                // aria-current={page.current ? 'page' : undefined}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                {_.capitalize(segment)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
