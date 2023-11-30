import * as supabase from "$lib/utils/supabase";

export async function load() {
  const { data } = await supabase.default.from("emailQueue").select();
  return {
    queue: data ?? [],
  };
}