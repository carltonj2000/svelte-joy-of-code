<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Posts Page'));
	onDestroy(() => console.log('Destroyed Posts Page'));
</script>

<h1>Posts Page</h1>

<p>
	You can <a href="/posts/create">create</a> or
	<a href="/posts/edit">edit</a> your posts.
</p>

<style>
	h1 {
		color: aqua;
	}
</style>
