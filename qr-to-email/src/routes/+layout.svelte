<script>
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { Github } from 'lucide-svelte';
	import { Linkedin } from 'lucide-svelte';
	import { LogIn } from 'lucide-svelte';
	import { LogOut } from 'lucide-svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { MoreVertical } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<ModeWatcher />
<nav class="flex flex-row p-4 align-middle justify-between">
	<a href={session !== null ? '/dashboard' : '/'}>QR to Email</a>
	<div class="flex items-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger><Button variant="ghost"><MoreVertical /></Button></DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group class="flex flex-row">
					<DropdownMenu.Item
						><Button variant="outline" size="icon"><Linkedin /></Button></DropdownMenu.Item
					>
					<DropdownMenu.Item
						><Button variant="outline" size="icon"><Github /></Button></DropdownMenu.Item
					>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		{#if session}
			<form method="POST" action="/auth/logout">
				<Button variant="ghost" type="submit"><LogOut /></Button>
			</form>
		{:else}
			<Button href="/auth" variant="ghost"><LogIn /></Button>
		{/if}
	</div>
</nav>
<main class="w-full flex flex-row p-4 justify-center text-center">
	<slot />
</main>
