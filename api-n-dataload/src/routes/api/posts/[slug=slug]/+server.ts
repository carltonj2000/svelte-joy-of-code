import { json, type RequestHandler } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async (event) => {
  const post = await db.post.findUnique({ where: { slug: event.params.slug } });
  return json(post);
};
