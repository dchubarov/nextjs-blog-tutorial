'use server';

import 'server-only';
import { notFound, redirect, RedirectType } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import _ from 'lodash';

import { BlogPost, FormValidationResult } from './model';
import { prisma } from '@/lib/prisma';

async function findPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) return undefined;

  return {
    ...post,
    tags: post.tags ? post.tags.split(',') : undefined,
  };
}

export async function getAllPosts() {
  const posts = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return posts.map((post) => ({
    ...post,
    tags: post.tags ? post.tags.split(',') : undefined,
  }));
}

export async function getPost(slug: string) {
  const post = await findPostBySlug(slug);
  if (!post) notFound();
  return post;
}

export async function createOrUpdatePost(
  _prevState: FormValidationResult,
  formData: FormData
): Promise<FormValidationResult> {
  const rawFormData = {
    slug: formData.get('slug'),
    title: formData.get('title'),
    content: formData.get('content'),
    tags: formData.get('tags'),
  };

  if (
    typeof rawFormData.title !== 'string' ||
    typeof rawFormData.content !== 'string' ||
    rawFormData.title === '' ||
    rawFormData.content === ''
  ) {
    return { messages: ['Both title and content must be non-empty'] };
  }

  let tags: string[] = [];
  if (typeof rawFormData.tags === 'string') {
    tags = rawFormData.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => !_.isEmpty(tag));
  }

  const tagsString = tags.length > 0 ? tags.join(',') : null;

  if (!!rawFormData.slug) {
    // Update existing post
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: rawFormData.slug as string },
    });

    if (!existingPost) {
      console.warn(`Post not found for update: ${rawFormData.slug}`);
      notFound();
    }

    await prisma.blogPost.update({
      where: { slug: rawFormData.slug as string },
      data: {
        title: rawFormData.title,
        content: rawFormData.content,
        tags: tagsString,
        lastModifiedAt: new Date(),
      },
    });

    revalidatePath(`/blog/${rawFormData.slug}`);
  } else {
    // Create new post
    const slug = _.kebabCase(rawFormData.title);
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (existingPost) {
      return {
        messages: ['This slug is already taken, try changing post title'],
      };
    }

    await prisma.blogPost.create({
      data: {
        slug,
        title: rawFormData.title,
        author: 'dime',
        content: rawFormData.content,
        tags: tagsString,
        createdAt: new Date(),
      },
    });

    revalidatePath(`/blog/${slug}`);
  }

  revalidatePath('/blog');
  redirect('/blog', RedirectType.replace);
}
