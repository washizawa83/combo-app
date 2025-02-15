import { SkillRelationType } from '@/types/db/db-schema'
import Image from 'next/image'

type Props = {
  skill: SkillRelationType
  disabled: boolean
  handleClickSkill: (skill: SkillRelationType) => void
}

export const SelectSkill = ({ skill, disabled, handleClickSkill }: Props) => {
  const onClickSkill = () => {
    handleClickSkill(skill)
  }

  return (
    <button
      className={`p-3 sm:w-72 w-full text-left border ${disabled ? 'border-accentEmpty bg-accentEmpty/[.4]' : 'border-accentBlue bg-accentBlue/[.4]'}`}
      onClick={onClickSkill}
      disabled={disabled}
    >
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
    </button>
  )
}
