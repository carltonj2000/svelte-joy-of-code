import type { PageLoad } from './$types';
import type { Post } from '@prisma/client';

export const load: PageLoad = async (event) => {
  const { fetch, depends } = event;
  const random = Math.round(Math.random() * 30);
  const response = await fetch(`/api/posts?limit=${random}`);
  const posts: Post[] = await response.json();
  depends('posts');
  return { posts };
};
