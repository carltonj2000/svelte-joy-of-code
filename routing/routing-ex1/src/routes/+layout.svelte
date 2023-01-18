<script lang="ts">
	import '@picocss/pico';
	import './app.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/posts/ one">Posts Invalid Slug</a>
		</li>
		<li>
			<a href="/image/2x3">Image 2x3</a>
		</li>
		<li>
			<a href="/image">Image Fail</a>
		</li>
		<li>
			<a href="/about">About Generic</a>
		</li>
		<li>
			<a href="/en/about">About English</a>
		</li>
		<li>
			<a href="/media/file/with/some/path/2/3">Media File</a>
		</li>
	</ul>
</nav>

<slot />
