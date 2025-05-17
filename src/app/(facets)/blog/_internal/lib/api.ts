'use server';

import 'server-only';
import { notFound, redirect, RedirectType } from 'next/navigation';
import { BlogPost } from './model';
import { revalidatePath } from 'next/cache';
import _ from 'lodash';

export async function getPosts() {
  return blogPosts.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}

export async function getPost(slug: string) {
  const post = blogPosts.find((value) => value.slug === slug);
  if (!post) notFound();
  return post;
}

export async function createPost(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    content: formData.get('content'),
    tags: formData.get('tags'),
  };

  if (
    typeof rawFormData.title !== 'string' ||
    typeof rawFormData.content !== 'string'
  )
    return;

  const post: BlogPost = {
    author: 'dime',
    createdAt: new Date(),
    slug: _.kebabCase(rawFormData.title),
    title: rawFormData.title,
    content: rawFormData.content,
    tags:
      typeof rawFormData.tags === 'string'
        ? rawFormData.tags
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => !_.isEmpty(tag))
        : [],
  };

  blogPosts.push(post);
  console.log(`Updated posts: ${JSON.stringify(blogPosts)}`);

  revalidatePath('/blog');
  redirect('/blog', RedirectType.replace);
}

const blogPosts: BlogPost[] = [
  {
    slug: 'phyllotaxis',
    title: 'Phyllotaxis',
    author: 'dime',
    content:
      'The regular arrangement of lateral organs (leaves on a stem, scales on ' +
      'a cone axis, florets in a composite flower head) is an important aspect ' +
      'of plant form, known as phyllotaxis. The extensive literature generated ' +
      'by biologists’ and mathematicians’ interest in phyllotaxis is reviewed ' +
      'by Erickson [36] and Jean [78]. The proposed models range widely from ' +
      'purely geometric descriptions (for example, Coxeter [17]) to complex ' +
      'physiological hypotheses tested by computer simulations (Hellendoorn ' +
      'and Lindenmayer [59], Veen and Lindenmayer [151], Young [163]). This ' +
      'chapter presents two models suitable for the synthesis of realistic images ' +
      'of flowers and fruits that exhibit spiral phyllotactic patterns.',
    createdAt: new Date(2024, 9, 5, 11, 34),
    tags: ['tag1', 'tag2'],
  },
  {
    slug: 'modeling-of-trees',
    title: 'Modeling of trees',
    author: 'dime',
    content:
      'Computer simulation of branching patterns has a relatively long history. Cellular–space ' +
      'The first model was proposed by Ulam [149], (see also [138, pages 127– models ' +
      '131]), and employed the concept of cellular automata that had been ' +
      'developed earlier by von Neumann and Ulam [156]. The branching ' +
      'pattern is created iteratively, starting with a single colored cell in a ' +
      'triangular grid, then coloring cells that touch one and only one vertex ' +
      'of a cell colored in the previous iteration step.',
    createdAt: new Date(2024, 7, 5, 17, 12),
    tags: ['tag1', 'tag3'],
  },
  {
    slug: 'models-of-plant-organs',
    title: 'Models of plant organs',
    author: 'dime',
    content:
      'The standard computer graphics method for defining arbitrary surfaces Bicubic patches ' +
      'makes use of bicubic patches [9, 10, 40]. A patch is defined by three ' +
      'polynomials of third degree with respect to parameters s and t. The ' +
      'following equation defines the x coordinate of a point on the patch:',
    createdAt: new Date(2024, 6, 25, 19, 5),
    tags: ['tag2'],
  },
];
