import { BlogPost as BlogPostModel } from '../_lib/model';

export default function BlogPost({ post }: { post: BlogPostModel }) {
  return (
    <>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">
        @{post.author} on {post.createdAt.toLocaleString()}
      </p>
      <p>{post.content}</p>
      {post.tags && (
        <div className="flex flex-row gap-1 text-gray-600">
          {post.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      )}
    </>
  );
}
