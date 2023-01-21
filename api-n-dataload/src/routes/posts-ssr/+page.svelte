<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<h1>Posts</h1>
<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<div>
		<h3><a href="/posts-ssr/{slug}">{title}</a></h3>
	</div>
{/each}
