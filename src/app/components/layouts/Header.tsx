import { getCurrentAuthUser, logout } from '@/app/service/auth'
import Link from 'next/link'
import { PageLayout } from '../PageLayout'

export const Header = async () => {
  const currentUser = await getCurrentAuthUser()

  return (
    <header className="bg-variant h-16 w-full">
      <PageLayout>
        <div className="flex items-center justify-between h-full">
          <div className="font-rubikOne text-4xl">Combo</div>
          <ul>
            {currentUser ? (
              <button className="font-rubikOne text-lg" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link href={'/pages/login'}>
                <li className="font-rubikOne text-lg">Login</li>
              </Link>
            )}
          </ul>
        </div>
      </PageLayout>
    </header>
  )
}
