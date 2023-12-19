<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/custom/dataTable.svelte';
	import AppendToQueue from '$lib/components/custom/crud/appendToQueue.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;
</script>

<section class="flex flex-col text-right">
	<DataTable data={data.queue} />
	<div><AppendToQueue data={data.queueForm} /></div>
</section>
