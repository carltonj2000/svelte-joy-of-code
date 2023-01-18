<script>
	import { page } from '$app/stores';

	export function load({ params }) {
		console.log(params.slug);
	}
</script>

<h3>You are on a sub page not yet setup</h3>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
