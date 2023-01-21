<script lang="ts">
	import type { Post } from '@prisma/client';
	async function getPosts() {
		const response = await fetch('/api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<h1>Posts CSR</h1>

{#await getPosts()}
	<p>Loading ...</p>
{:then posts}
	<p>Showing {posts.length} posts.</p>
	{#each posts as { slug, title }}
		<div>
			<h3><a href="/posts-csr/{slug}">{title}</a></h3>
		</div>
	{/each}
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await}
