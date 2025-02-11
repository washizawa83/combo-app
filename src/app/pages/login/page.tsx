'use client'

import { login } from '@/app/service/auth'
import { IconContext } from 'react-icons'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  return (
    <button
      className="z-10 flex w-60 items-center rounded bg-white p-2"
      onClick={() => login('google')}
    >
      <IconContext.Provider value={{ size: '28px' }}>
        <FcGoogle />
      </IconContext.Provider>
      <span className="ml-3 text-slate-700">Login With Google</span>
    </button>
  )
}
