<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	export let data;
</script>

<section>
	<h1>Welcome to QRToEmail!</h1>
	<p>Send messages or files automatically by scanning a QR code!</p>
	<div class="flex lg:flex-row sm:flex-col justify-center">
		<Button class="m-1" href="/dashboard">Get started</Button>
		<Button class="m-1" href="/readme">What is this?</Button>
	</div>
</section>
