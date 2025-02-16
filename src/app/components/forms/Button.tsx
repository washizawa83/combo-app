import { tv, VariantProps } from 'tailwind-variants'

type ButtonVariants = VariantProps<typeof button>

export const button = tv({
  base: 'min-w-22 min-h-8 border font-rubikOne text-xs px-3',
  variants: {
    color: {
      red: 'bg-accentRed/[.4] border-accentRed',
      green: 'bg-accentGreen/[.4] border-accentGreen',
      blue: 'bg-accentBlue/[.4] border-accentBlue',
      empty: 'bg-accentEmpty/[.4] border-accentEmpty',
    },
  },
  defaultVariants: {
    color: 'green',
  },
})

type Props = {
  label: string
  type?: 'button' | 'submit'
  handleClick: () => void
} & ButtonVariants

export const Button = ({
  label,
  type = 'button',
  handleClick,
  ...variants
}: Props) => {
  return (
    <button
      type={type}
      className={button({ ...variants })}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}
