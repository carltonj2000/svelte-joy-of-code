import { json, type RequestHandler } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async (event) => {
  //const posts = await db.post.findMany({ take: Math.round(Math.random() * 30) });
  //event.setHeaders({ 'Cache-Control': 'max-age=5' });
  const { url } = event;
  const limit = Number(url.searchParams.get('limit') ?? 30);
  const order = url.searchParams.get('order') ?? 'asc';
  console.log(`order: ${order}, limit: ${limit}`);
  const posts = await db.post.findMany({ take: limit, orderBy: { id: order } });
  return json(posts);
};
