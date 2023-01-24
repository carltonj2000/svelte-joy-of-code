<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ posts } = data);
</script>

<h1>Posts Layout SSR</h1>
<div class="layout">
	<aside>
		<nav>
			<h4>Posts</h4>
			<ul>
				{#each posts as { slug, title }}
					<li><a href="/posts-layout/{slug}">{title}</a></li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 200px minmax(auto, 60ch);
		gap: 2rem;
	}
</style>
