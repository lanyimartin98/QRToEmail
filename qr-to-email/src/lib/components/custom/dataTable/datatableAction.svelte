<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { MoreHorizontal } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { enhance } from '$app/forms';

	let dropDownOpen: boolean = false;

	const onDropdownOpenChange = () => {
		dropDownOpen = !dropDownOpen;
	};

	let deleteDialogOpen: boolean = false;

	const onDeleteDialogOpenChange = () => {
		deleteDialogOpen = !deleteDialogOpen;
	};

	export let id: string;
	export let invalidation: boolean;
	export let form: any;

	$: if (form && form.message && form.message === 'success') {
		invalidation != invalidation;
		onDeleteDialogOpenChange();
	}
</script>

<DropdownMenu.Root open={dropDownOpen} onOpenChange={onDropdownOpenChange}>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative w-8 h-8 p-0">
			<span class="sr-only">Open menu</span>
			<MoreHorizontal class="w-4 h-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Item>Edit message</DropdownMenu.Item>
		<DropdownMenu.Item on:click={onDeleteDialogOpenChange}>Delete message</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<Dialog.Root open={deleteDialogOpen} onOpenChange={onDeleteDialogOpenChange}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Are you sure you want to delete this message from the queue?</Dialog.Title>
			<Dialog.Description class="flex flex-row">
				<form method="POST" action="?/removeFromQueue&id={id}" use:enhance>
					<Button type="submit">Yes</Button>
				</form>
				<Button on:click={onDeleteDialogOpenChange}>No</Button>
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
