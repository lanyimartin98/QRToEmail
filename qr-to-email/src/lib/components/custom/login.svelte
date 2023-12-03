<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { SuperValidated, Validators } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import { loginSchema } from '$lib/schemas';

	export let data: SuperValidated<typeof loginSchema>;

	const { form, errors, enhance } = superForm(data, { validators: loginSchema });
</script>

<form method="POST" action="?/login" use:enhance>
	<Card.Root>
		<Card.Header>
			<Card.Title>Login</Card.Title>
		</Card.Header>
		<Card.Content>
			<Label for="email">Email</Label>
			<Input type="email" id="email" name="email" bind:value={$form.email} />
			{#if $errors.email}
				<p class="text-sm text-muted-foreground">{$errors.email}</p>
			{/if}

			<Label for="password">Password</Label>
			<Input type="password" id="password" name="password" bind:value={$form.password} />
			{#if $errors.password}
				<p class="text-sm text-muted-foreground">{$errors.password}</p>
			{/if}

			<Button type="submit">Login</Button>
		</Card.Content>
	</Card.Root>
</form>
