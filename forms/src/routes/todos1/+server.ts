import { removeTodos, addTodos, updateTodos } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export type Data = {
  success: boolean;
  errors: Record<string, string>;
};

export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const text = String(formData.get('text'));
  const data: Data = { success: false, errors: {} };
  if (!text) {
    data.errors.text = 'required';
    return json(data, { status: 400 });
  }

  addTodos(text);
  data.success = true;
  return json(data);
};

export const DELETE: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const id = Number(formData.get('id'));
  const data: Data = { success: false, errors: {} };
  if (!id) {
    data.errors.text = 'required';
    return json(data, { status: 400 });
  }

  removeTodos(id);
  data.success = true;
  return json(data);
};
