import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="xl:w-content xl:px-0 w-full h-full mx-auto px-8">
      {children}
    </div>
  )
}
