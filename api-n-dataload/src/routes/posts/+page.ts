import type { PageLoad } from './$types';
import type { Post } from '@prisma/client';

export const load: PageLoad = async (event) => {
  const { fetch } = event;
  const response = await fetch('/api/posts');
  const posts: Post[] = await response.json();
  return { posts };
};
