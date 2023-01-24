import db from '$lib/database';
import type { Post } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageLoad as PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
  const post: Post = await db.post.findUnique({ where: { slug: event.params.slug } });
  if (!post) {
    throw error(404, 'Post not found');
  }
  return { post };
};
