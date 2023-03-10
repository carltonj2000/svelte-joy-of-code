import db from '$lib/database';
import type { Post } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { params, parent } = event;
  const parentData = await parent();
  console.log(parentData);
  const post: Post | null = await db.post.findUnique({
    where: { slug: params.slug }
  });
  if (!post) {
    throw error(404, 'Post not found');
  }
  return { post };
};
