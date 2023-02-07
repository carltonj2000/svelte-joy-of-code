import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const user = String(formData.get('user'));
    const password = String(formData.get('password'));
    console.log({ user, password });

    const errors: Record<string, unknown> = {};

    if (!user || typeof user !== 'string') {
      errors.user = 'required';
    }

    if (!password || typeof password !== 'string') {
      errors.password = 'required';
    }
    const data = {
      data: Object.fromEntries(formData),
      errors
    };

    if (Object.keys(errors).length > 0) {
      return fail(400, data);
    }

    //return data;
    throw redirect(303, '/todos');
  }
};
