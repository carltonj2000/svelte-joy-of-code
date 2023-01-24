<script lang="ts">
	import { invalidate } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);

	function rerunLoad() {
		// to do
		invalidate('posts'); // a dependency defined on the server code
		// invalidate('api/posts'); // won't work with params
		// invalidate(url => url.href.includdes('posts'));
		// invalidateAll();
	}
</script>

<h1>Posts SSR</h1>

<button on:click={rerunLoad}>Rerun Load</button>

<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<div>
		<h3><a href="/posts-ssr/{slug}">{title}</a></h3>
	</div>
{/each}
