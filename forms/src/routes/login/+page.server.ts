import { fail, redirect, type Actions } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const loginSchema = zfd.formData({
      user: zfd.text(),
      password: zfd.text()
    });

    const result = loginSchema.safeParse(formData);
    const data = Object.fromEntries(formData);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return fail(400, { data, errors });
    }
    console.log({ data });
    return { data };
  }
};
