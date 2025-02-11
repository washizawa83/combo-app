'use server'

import { createClient } from "../utils/supabase/server"
import { redirect } from 'next/navigation'

export const getCurrentUser = async () => {
  const supabase = createClient()
  const {
    data: { user },
  } = await (await supabase).auth.getUser()
  return user
}

export const login = async (provider: 'google') => {
  const supabase = createClient()
  const { data, error } = await (
    await supabase
  ).auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `http://localhost:3000/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (error) {
    redirect('/pages/error')
  }

  if (data.url) {
    redirect(data.url)
  }
}

export const logout = async () => {
  const supabase = createClient()
  const { error } = await (await supabase).auth.signOut()

  if (error) {
    redirect('/error')
  }

  redirect('http://localhost:3000/')
}
