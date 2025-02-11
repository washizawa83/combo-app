import { tv, VariantProps } from 'tailwind-variants'

type TitleVariants = VariantProps<typeof titleBar>

export const titleBar = tv({
  base: 'w-5 h-10 border mr-5',
  variants: {
    color: {
      red: 'bg-accentRed/[.4] border-accentRed',
      green: 'bg-accentGreen/[.4] border-accentGreen',
      blue: 'bg-accentBlue/[.4] border-accentBlue',
    },
  },
  defaultVariants: {
    color: 'red',
  },
})

type Props = {
  title: string
} & TitleVariants

export const Title = ({ title, ...variants }: Props) => {
  return (
    <div className="flex items-center my-5">
      <div className={titleBar({ ...variants })}></div>
      <h2 className="font-rubikOne text-3xl">{title}</h2>
    </div>
  )
}
