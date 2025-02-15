import { SkillRelationType } from '@/types/db/db-schema'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { FiTrash } from 'react-icons/fi'

type Props = {
  index: number
  skill: SkillRelationType
  handleDeleteSkill: (index: number) => void
}

export const SelectedSkillItem = ({
  index,
  skill,
  handleDeleteSkill,
}: Props) => {
  return (
    <div className="flex items-center bg-accentGreen/[.4] border border-accentGreen p-2">
      <div className="w-10 text-center mr-3">
        <span className="xl:text-xl text-lg">{index + 1}</span>
      </div>
      <div className="grow border-l border-accentGreen px-4">
        <p className="xl:text-xl text-lg mb-2">{skill.name}</p>
        <span>
          <ul className="flex items-center">
            {skill.commands
              .sort((a, b) => a.order - b.order)
              .map((command, i) => (
                <li key={i}>
                  <Image
                    src={`/images/commands/${command.commandId}.svg`}
                    alt={command.commandId}
                    width={24}
                    height={24}
                  />
                </li>
              ))}
          </ul>
        </span>
      </div>
      <div className="flex justify-center w-12">
        <span
          className="cursor-pointer"
          onClick={() => handleDeleteSkill(index)}
        >
          <IconContext.Provider value={{ size: '24px', color: '#F64E4E' }}>
            <FiTrash />
          </IconContext.Provider>
        </span>
      </div>
    </div>
  )
}
