<script lang="ts">
	import DataTable from '$lib/components/custom/dataTable.svelte';
	import AppendToQueue from '$lib/components/custom/crud/appendToQueue.svelte';
	import { invalidateAll } from '$app/navigation';
	export let data;
	let invalidation: boolean = false;

	$: if (invalidation) {
		console.log('works');
	}
</script>

<section class="flex flex-col text-right">
	{#if data.queue}
		<DataTable data={data.queue} />
	{/if}
	<div><AppendToQueue data={data.queueForm} bind:invalidation /></div>
</section>
