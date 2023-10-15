
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"")



export const Supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL||"",process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY||"", {
    auth:{
        autoRefreshToken:false, 
        persistSession:false
    }
})


