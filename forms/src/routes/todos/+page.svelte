<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;
	const addTodo: SubmitFunction = (input) => {
		// console.log('execute before form submits', { input });
		loading = true;

		return async (options) => {
			// console.log('execute after form submits', { options });
			await options.update();
			loading = false;
		};
	};
</script>

<h1>To Do's</h1>

{#if loading}
	<p>Loading ...</p>
{/if}
<form action="?/addTodo" method="post" class="addToDo" use:enhance={addTodo}>
	<button type="submit" formaction="?/clearTodos" class="secondary"
		>Clear All To Do</button
	>
	<div>
		<input type="text" name="text" />
		{#if form?.missing}
			<p class="error">Required</p>
		{/if}
		<button type="submit" aria-busy={loading}>
			{#if !loading}
				Add To Do
			{/if}
		</button>
	</div>
</form>
{#each data.todos as td}
	<div class="todoList">
		<label><input type="checkbox" name="completed" />Completed</label>
		<input type="hidden" name="id" value={td.id} />
		<h3>{td.text}</h3>
		<form action="?/removeTodo" method="post" use:enhance>
			<input type="hidden" name="id" value={td.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}

<style>
	.todoList {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.error {
		background: yellow;
		color: tomato;
	}
	.addToDo {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
	.addToDo > div {
		display: flex;
		width: 100%;
		gap: 1rem;
	}
</style>
