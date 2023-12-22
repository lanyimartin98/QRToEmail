<script lang="ts">
	import DataTable from '$lib/components/custom/dataTable.svelte';
	import AppendToQueue from '$lib/components/custom/crud/appendToQueue.svelte';

	export let data;
	export let form;

	let invalidation: boolean = false;
</script>

<section class="flex flex-col text-right">
	{#if data.queue}
		{#key invalidation}
			<DataTable data={data.queue} bind:invalidation {form} />
		{/key}
	{/if}
	<div><AppendToQueue data={data.queueForm} bind:invalidation /></div>
</section>
