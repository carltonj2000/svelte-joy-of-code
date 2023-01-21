<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from '@prisma/client';

	async function getPost(slug: string) {
		const response = await fetch(`/api/posts/${slug}`);
		const post: Post = await response.json();
		return post;
	}
</script>

<h3>Post Details</h3>

{#await getPost($page.params.slug)}
	<p>Loading</p>
{:then post}
	<h4>{post.title}</h4>
	<p>{post.content}</p>
{:catch error}
	<p>{error.mesage}</p>
{/await}
