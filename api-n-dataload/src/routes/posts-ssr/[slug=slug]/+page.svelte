<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ post } = data);

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}
</script>

<h3>{post.title}</h3>
<h4>{formatDate(post.createdAt)}</h4>
<p>{post.content}</p>
