<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { superForm, setMessage, setError } from 'sveltekit-superforms/client';
	import { loginSchema } from '$lib/schemas';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let supabase: SupabaseClient;

	let email: string;
	let password: string;

	const handleSignIn = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		console.log(error);
		if (error === null) {
			goto('/');
		}
	};
</script>

<form on:submit={handleSignIn}>
	<Card.Root>
		<Card.Header>
			<Card.Title>Login</Card.Title>
		</Card.Header>
		<Card.Content>
			<Label for="email">Email</Label>
			<Input type="email" id="email" bind:value={email} />
			<p class="text-sm text-muted-foreground"></p>

			<Label for="password">Password</Label>
			<Input type="password" id="password" bind:value={password} />
			<p class="text-sm text-muted-foreground"></p>

			<Button type="submit">Login</Button>
		</Card.Content>
	</Card.Root>
</form>
