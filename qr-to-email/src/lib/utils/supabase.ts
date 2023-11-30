import { PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

import { createClient } from '@supabase/supabase-js'

export default createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
)