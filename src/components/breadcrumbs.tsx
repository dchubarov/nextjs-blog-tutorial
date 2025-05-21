'use client';

import { Link } from '@/components/link';
import { Breadcrumb } from '@/lib/breadcrumbs';

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <Link href="/" className="text-gray-400 hover:text-gray-500">
            <svg
              width="24"
              height="24"
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
        </li>
        {items.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" className="text-gray-400" />
              </svg>
              <span className="text-sm font-semibold text-gray-500 ml-1">
                {index < items.length - 1 ? (
                  <Link
                    className=" hover:text-gray-700 font-normal underline"
                    href={item.href}>
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
