'use client';

import { BlogPost } from '../lib/model';
import { Link } from '@/components/link';
import { Badge } from '@/components/badge';

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  const featuredPost = posts.length > 0 ? posts[0] : undefined;
  if (!featuredPost) return null;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <div className="block text-sm/6 text-gray-600">
            @{featuredPost.author} on {featuredPost.createdAt.toLocaleString()}
          </div>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg/8 text-gray-600">{featuredPost.content}</p>
          {featuredPost.tags && (
            <div className="flex gap-2 mt-4">
              {featuredPost.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <Link
                href={`/blog/${featuredPost.slug}`}
                aria-describedby="featured-post"
                className="text-sm/6 font-semibold text-indigo-600">
                Continue reading <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </article>

        {posts.length > 1 && (
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {posts.slice(1).map((post) => (
                <article key={post.slug} className="py-12">
                  <div className="group relative max-w-xl">
                    <div className="block text-sm/6 text-gray-600">
                      @{post.author} on {post.createdAt.toLocaleString()}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm/6 text-gray-600">
                      {post.content}
                    </p>
                    {post.tags && (
                      <div className="flex gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
