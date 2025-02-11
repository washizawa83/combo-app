import { Character } from '@/types/util/character'
import Image from 'next/image'

type Props = {
  character: Character
}

export const CharacterPanel = ({ character }: Props) => {
  return (
    <div className="w-full h-full border border-accentRed bg-accentRed/[.4] hover:bg-accentRed overflow-hidden relative">
      <Image
        src={`/images/characters/${character.name}.png`}
        alt="mai"
        width="700"
        height="700"
      />
      <span className="absolute top-3 left-5 font-rubikOne text-2xl">
        {character.displayName}
      </span>
    </div>
  )
}
