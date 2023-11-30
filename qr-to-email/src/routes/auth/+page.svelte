<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Login from '$lib/components/custom/login.svelte';
	import Register from '$lib/components/custom/register.svelte';

	export let data;
	let { supabase } = data;
</script>

<section>
	<Tabs.Root value="login" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">Login</Tabs.Trigger>
			<Tabs.Trigger value="register">Register</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="login"><Login {supabase} /></Tabs.Content>
		<Tabs.Content value="register"><Register {supabase} /></Tabs.Content>
	</Tabs.Root>
</section>
