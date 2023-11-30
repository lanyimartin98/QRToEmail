<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import DataTable from '$lib/components/custom/dataTable.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;

	onMount(async () => {
		if (!data.session) {
			goto('/');
		}
	});
</script>

<section class="flex flex-col text-right">
	<DataTable data={data.queue} />
	<div><Button class="m-2">Add</Button></div>
</section>
