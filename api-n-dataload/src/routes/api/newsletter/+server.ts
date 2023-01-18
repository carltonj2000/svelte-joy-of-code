import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
  const options: ResponseInit = {
    status: 418,
    headers: {
      X: 'Gon to give it to you'
    }
  };
  return new Response('hello', options);
};

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const email = data.get('email');

  console.log(email);

  return new Response(JSON.stringify({ succes: true }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
