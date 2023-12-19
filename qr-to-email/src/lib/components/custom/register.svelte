<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { registerSchema } from '$lib/schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<typeof registerSchema>;

	const { form, errors, enhance } = superForm(data, { validators: registerSchema });

	let email: string;
	let password: string;
	let passwordAgain: string;
</script>

<form method="POST" action="?/register" use:enhance>
	<Card.Root>
		<Card.Header>
			<Card.Title>Login</Card.Title>
		</Card.Header>
		<Card.Content>
			<Label for="email">Email</Label>
			<Input name="email" type="email" id="email" bind:value={$form.email} />
			{#if $errors.email}
				<p class="text-sm text-muted-foreground">{$errors.email}</p>
			{/if}

			<Label for="password">Password</Label>
			<Input name="password" type="password" id="password" bind:value={$form.password} />
			<p class="text-sm text-muted-foreground"></p>
			{#if $errors.password}
				<p class="text-sm text-muted-foreground">{$errors.password}</p>
			{/if}
			<Label for="passwordAgain">Password again</Label>
			<Input
				name="passwordAgain"
				type="password"
				id="passwordAgain"
				bind:value={$form.passwordAgain}
			/>
			<p class="text-sm text-muted-foreground"></p>
			{#if $errors.passwordAgain}
				<p class="text-sm text-muted-foreground">{$errors.passwordAgain}</p>
			{/if}
			<Button type="submit" class="m-4">Register</Button>
		</Card.Content>
	</Card.Root>
</form>
