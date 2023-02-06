import {
  addTodos,
  clearTodos,
  getTodos,
  removeTodos
} from '$lib/server/database';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const todos = getTodos();
  return { todos };
}) satisfies PageServerLoad;

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formData = await request.formData();
    const text = String(formData.get('text'));
    if (!text) {
      console.log('server form text missing');
      return fail(400, { text, missing: true });
    }
    addTodos(text);
    return { success: true };
  },
  removeTodo: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get('id'));
    if (!id) return fail(400, { id, missing: true });
    removeTodos(id);
    return { success: true };
  },
  clearTodos: () => {
    clearTodos();
  }
};
