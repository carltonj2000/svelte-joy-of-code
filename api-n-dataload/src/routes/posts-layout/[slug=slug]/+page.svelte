<script lang="ts">
	import type { PageData } from './$types';

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}

	export let data: PageData;
	$: ({ post, posts } = data);
</script>

<h2>Post</h2>
<h3>{post.title}</h3>
<h4>{formatDate(post.createdAt)}</h4>
<p>{post.content}</p>

<h5 class="posts">Posts</h5>
{#each posts as p}
	<a href={p.slug}><h6>{p.title}</h6></a>
{/each}

<style>
	.posts {
		margin-top: 3rem;
	}
</style>
