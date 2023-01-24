<script lang="ts">
	import '@picocss/pico/css/pico.css';
	import '../app.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts-csr">Posts CSR</a></li>
		<li><a href="/posts-ssr">Posts SSR</a></li>
		<li><a href="/posts-layout">Posts Layout SSR</a></li>
	</ul>
</nav>

<slot />
