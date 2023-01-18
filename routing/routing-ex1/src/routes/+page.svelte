<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Home Page'));
	onDestroy(() => console.log('Destroyed Home Page'));
</script>

<h1>Home Page</h1>

