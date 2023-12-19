<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Login from '$lib/components/custom/login.svelte';
	import Register from '$lib/components/custom/register.svelte';
	import type { PageData } from '../$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { onMount } from 'svelte';

	export let data: PageData;
	let { supabase } = data;
</script>

<section>
	<Tabs.Root value="login" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">Login</Tabs.Trigger>
			<Tabs.Trigger value="register">Register</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="login"><Login data={data.loginForm} /></Tabs.Content>
		<Tabs.Content value="register"><Register data={data.registerForm} /></Tabs.Content>
	</Tabs.Root>
</section>
