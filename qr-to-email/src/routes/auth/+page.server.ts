import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/schemas.js';

export const load = (async () => {
    const loginForm = await superValidate(loginSchema);
    return { loginForm };
  });

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
            const loginForm = await superValidate(request, loginSchema);
            const email = loginForm.data.email;
            const password = loginForm.data.password;
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (!loginForm.valid) {
                return fail(400, { loginForm });
              }
    
            if(error){
                if(error instanceof AuthApiError&&error.status===400){
                    return setError(loginForm,'password','Invalid login credentials!');
                }
                return setError(loginForm,'password','Internal server error! Please try again later!');
            }

            throw redirect(303,'/');
	},
	register: async (event) => {
		
	}
};