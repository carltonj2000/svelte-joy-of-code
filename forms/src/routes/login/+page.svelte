<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	const login: SubmitFunction = () => {
		return async ({ result }) => {
			console.log(result);
			if (result.type === 'redirect') {
				await applyAction(result);
			}
		};
	};
</script>

<h1>Forms</h1>

<form method="post" action="/login" use:enhance={login}>
	<input type="text" name="user" value={form?.data?.user ?? ''} />
	{#if form?.errors?.user}
		<p class="error">{form.errors.user}</p>
	{/if}
	<input type="password" name="password" />
	{#if form?.errors?.password}
		<p class="error">{form.errors.password}</p>
	{/if}
	<button type="submit">Login</button>
</form>

<pre>{JSON.stringify(form, null, 2)}</pre>

<style>
	.error {
		color: tomato;
	}
</style>
