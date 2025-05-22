import React from 'react';

export function Content({
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
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </header>
      )}
      {children}
    </div>
  );
}
