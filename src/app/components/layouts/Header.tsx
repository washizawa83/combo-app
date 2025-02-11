import { PageLayout } from '../PageLayout'

export const Header = () => {
  return (
    <header className="bg-variant h-16 w-full">
      <PageLayout>
        <div className="flex items-center justify-between h-full">
          <div className="font-rubikOne text-4xl">Combo</div>
          <ul>
            <li className="font-rubikOne text-lg">Login</li>
          </ul>
        </div>
      </PageLayout>
    </header>
  )
}
