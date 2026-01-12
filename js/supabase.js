import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

export const supabase = createClient(
  'https://ovpwauuptzyhzlbhgcex.supabase.co', // Supabase URL
  'sb_publishable_22d222QCrTSkrLxo6nklWQ_OPjwTDAH' // Public Anon Key
)
