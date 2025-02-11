import { CharacterNames } from '@/types/util/character'

type Props = {
  params: Promise<{ characterName: CharacterNames }>
}

const CharacterPage = async ({ params }: Props) => {
  const characterName = (await params).characterName

  return <p>{characterName}</p>
}

export default CharacterPage
