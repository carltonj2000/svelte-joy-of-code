<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	import type { PageData } from './$types';
	import type { Data } from './+server';

	export let data: PageData;
	let form: Data;

	async function addTodo(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const result = await fetch('/todos', {
			method: 'POST',
			body: new FormData(formEl)
		});
		formEl.reset();
		form = await result.json();
		await invalidateAll();
	}

	async function removeTodo(event: Event) {
		const result = await fetch('/todos', {
			method: 'DELETE',
			body: new FormData(event.target as HTMLFormElement)
		});
		const data: Data = await result.json();
		if (data.success) {
			await invalidateAll();
		} else {
			console.log('should set errors after delete');
		}
	}

	async function updateTodo(event: Event) {
		console.log('update');
		const result = await fetch('/todos', {
			method: 'UPDATE',
			body: new FormData(event.target as HTMLFormElement)
		});
		const data: Data = await result.json();
		if (data.success) {
			return console.log('should refreseh todos after delete');
		}
		console.log('should set errors after delete');
	}
</script>

<h1>To Do's</h1>

<form on:submit|preventDefault={addTodo} method="post" class="addToDo">
	<input type="text" name="text" />
	{#if form?.errors?.text}
		<p class="error">{form.errors.text}</p>
	{/if}
	<button type="submit">Add To Do</button>
</form>
{#each data.todos as td}
	<div class="todoList">
		<form on:submit|preventDefault={updateTodo} method="post">
			<label
				><input
					type="checkbox"
					name="completed"
					on:change={updateTodo}
				/>Completed</label
			>
			<input type="hidden" name="id" value={td.id} />
		</form>
		<h3>{td.text}</h3>
		<form on:submit|preventDefault={removeTodo} method="post">
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
		gap: 1rem;
		align-items: center;
	}
</style>
