// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase:TypedSupabaseClient,
			getSession: Promise<Session | null>
		}
		interface PageData {
			session: Session | null
			form:any|null
		  }
		// interface Platform {}
	}
}

export {};
