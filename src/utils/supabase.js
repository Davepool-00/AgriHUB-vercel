import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

// Form action utils
export const formActionDefault = {
  formProcess: false,
  formStatus: 200,
  formErrorMessage: '',
  formSuccessMessage: '',
}


// Retrieve user information
export const getUserInformation = async () => {
  const {
    data: {
      user: { user_metadata }
    }
  } = await supabase.auth.getUser()

  return user_metadata
}