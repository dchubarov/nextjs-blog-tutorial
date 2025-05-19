import React from 'react';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
