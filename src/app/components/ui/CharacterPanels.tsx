import { Characters } from '@/app/utils/game/characters'
import Link from 'next/link'
import { CharacterPanel } from './CharacterPanel'

export const CharacterPanels = () => {
  return (
    <ul className="flex flex-wrap justify-center">
      {Characters.map((character) => (
        <li key={character.name} className="w-1/4 min-w-72 h-52 pr-2 pb-2">
          <Link href={`/pages/character/${character.name}/`}>
            <CharacterPanel character={character} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
