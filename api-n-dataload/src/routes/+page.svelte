<script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const result = await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
		const resultData = await result.json();
		console.log(resultData);
	}
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button type="submit">Subscribe</button>
</form>
