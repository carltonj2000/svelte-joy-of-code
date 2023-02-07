<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Forms</h1>

<form method="post" use:enhance>
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
