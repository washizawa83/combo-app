import { PageLayout } from './components/PageLayout'
import { CharacterPanels } from './components/ui/CharacterPanels'
import { Title } from './components/ui/Title'

export default function Home() {
  return (
    <PageLayout>
      <main>
        <Title title="Characters" />
        <div>
          <CharacterPanels />
        </div>
      </main>
    </PageLayout>
  )
}
