'use client';

import { useActionState } from 'react';
import { BlogPost, FormValidationResult } from '../lib/model';
import { createOrUpdatePost, deletePost } from '../lib/actions';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Field, FieldGroup, Fieldset, Label } from '@/components/fieldset';
import { Textarea } from '@/components/textarea';

const initialState: FormValidationResult = { messages: undefined };

export default function BlogEntryForm({ post }: { post?: BlogPost }) {
  const [state, action] = useActionState(createOrUpdatePost, initialState);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?'))
      await deletePost(post!.slug);
  };

  return (
    <form action={action}>
      <Fieldset>
        <input type="hidden" name="slug" value={post?.slug} />
        <input type="hidden" name="version" value={post?.version} />
        <FieldGroup>
          <Field>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              defaultValue={post?.title}
              placeholder="Post title"
              autoFocus
            />
          </Field>

          <Field>
            <Label>Content</Label>
            <Textarea
              name="content"
              defaultValue={post?.content}
              placeholder="Post content"
              rows={6}
            />
          </Field>

          <Field>
            <Label>Tags</Label>
            <Input
              name="tags"
              type="text"
              defaultValue={post?.tags?.join(', ')}
              placeholder="Comma-separated tags"
            />
          </Field>

          {state.messages && (
            <ul className="list-disc text-red-500 text-base/6 sm:text-sm/6">
              {state.messages.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          )}
        </FieldGroup>

        <FieldGroup className="flex gap-1">
          <Button type="submit">Save</Button>
          <Button
            href={post?.slug ? `/blog/${post.slug}` : '/blog'}
            replace
            plain>
            Cancel
          </Button>
          {post && (
            <>
              <span className="flex-1" />
              <Button type="button" color="red" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
          <span /> {/* Avoid last-child resize */}
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
