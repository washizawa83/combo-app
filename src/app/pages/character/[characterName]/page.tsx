'use client'

import { Button } from '@/app/components/forms/Button'
import { PageLayout } from '@/app/components/PageLayout'
import { CharacterNames } from '@/types/util/character'
import { useParams, useRouter } from 'next/navigation'

const CharacterPage = () => {
  const router = useRouter()
  const params = useParams<{ characterName: CharacterNames }>()
  const characterName = params.characterName

  const gotoCreateComboPage = () => {
    router.push(`/pages/create-combo?characterName=${characterName}`)
  }

  return (
    <PageLayout>
      <div>
        <h1>{characterName}</h1>
        <Button label="Add Combo" handleClick={gotoCreateComboPage} />
      </div>
    </PageLayout>
  )
}

export default CharacterPage
