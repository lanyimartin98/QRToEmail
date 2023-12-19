import { fail, redirect } from "@sveltejs/kit";

export async function POST({locals: { supabase } }) {
    const { error } = await supabase.auth.signOut();
    if(error){
      throw fail(500);
    }
    throw redirect(303,'/');
  }