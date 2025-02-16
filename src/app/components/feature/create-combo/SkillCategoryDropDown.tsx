import { SkillCategories, SkillRelationType } from '@/types/db/db-schema'
import { useState } from 'react'
import { SelectSkill } from './SelectSkill'

type Props = {
  categoryName: SkillCategories
  skills: SkillRelationType[]
  disabled: boolean
  handleClickSkill: (skill: SkillRelationType) => void
}

export const SkillCategoryDropDown = ({
  categoryName,
  skills,
  disabled,
  handleClickSkill,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="p-3 sm:w-72 w-full text-left border border-accentRed bg-accentRed/[.4]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {categoryName}
      </button>
      {isOpen && (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <SelectSkill
                skill={skill}
                handleClickSkill={handleClickSkill}
                disabled={disabled}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
