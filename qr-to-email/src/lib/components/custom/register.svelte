<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let supabase: SupabaseClient;

	let email: string;
	let password: string;
	let passwordAgain: string;

	const handleSignUp = async () => {
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
		if (error === null) {
			goto('/');
		}
	};
</script>

<form on:submit={handleSignUp}>
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

			<Label for="passwordAgain">Password again</Label>
			<Input type="password" id="passwordAgain" bind:value={passwordAgain} />
			<p class="text-sm text-muted-foreground"></p>

			<Button type="submit">Login</Button>
		</Card.Content>
	</Card.Root>
</form>
