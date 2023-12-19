<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { queueSchema } from '$lib/schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<typeof queueSchema>;

	const { form, errors, enhance } = superForm(data, { validators: queueSchema });
</script>

<form method="POST" action="?/appendToQueue" use:enhance>
	<Dialog.Root>
		<Dialog.Trigger><Button>Add</Button></Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Append message to the queue!</Dialog.Title>
				<Dialog.Description>
					<Label for="sendTo">Send to</Label>
					<Input name="sendTo" type="email" id="sendTo" bind:value={$form.sendTo} />
					{#if $errors.sendTo}
						<p class="text-sm text-muted-foreground">{$errors.sendTo}</p>
					{/if}

					<Label for="message">Message</Label>
					<Input name="textarea" type="message" id="message" bind:value={$form.message} />
					<p class="text-sm text-muted-foreground"></p>
					{#if $errors.message}
						<p class="text-sm text-muted-foreground">{$errors.message}</p>
					{/if}
					<Label for="attachment">Attachment</Label>
					<Input name="attachment" type="file" id="attachment" />
					<p class="text-sm text-muted-foreground"></p>
					{#if $errors.attachment}
						<p class="text-sm text-muted-foreground">{$errors.attachment}</p>
					{/if}
					<Button type="submit" class="m-4">Append</Button>
				</Dialog.Description>
			</Dialog.Header>
		</Dialog.Content>
	</Dialog.Root>
</form>
