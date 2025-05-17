import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Homepage</h1>
      <Link href="/blog">Navigate to blog</Link>
    </>
  );
}
