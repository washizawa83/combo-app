'use client'

import {
  DriveGauge,
  GaugeLevel,
} from '@/app/components/feature/create-combo/DriveGauge'
import { SelectedSkillItem } from '@/app/components/feature/create-combo/SelectedSkillItem'
import { SkillCategoryDropDown } from '@/app/components/feature/create-combo/SkillCategoryDropDown'
import { Button } from '@/app/components/forms/Button'
import { InputForm } from '@/app/components/forms/InputForm'
import { PageLayout } from '@/app/components/PageLayout'
import { Title } from '@/app/components/ui/Title'
import { getCurrentAuthUser, getUser } from '@/app/service/auth'
import {
  createCombo,
  createSkillsOnCombos,
  getAllCharacters,
  getSkillsByCharacter,
} from '@/app/service/game'
import {
  CreateComboSchema,
  SkillCategories,
  SkillRelationType,
} from '@/types/db/db-schema'
import { CharacterNames } from '@/types/util/character'
import { Character } from '@@/prisma/generated/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import React, { startTransition, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Very Hard'

const maxSkillLength = 50

enum skillCategoryPriority {
  '通常技',
  '特殊技',
  '必殺技',
  'スーパーアーツ',
  '通常投げ',
  '共通システム',
}

const getSelectedCharacter = (
  selectedCharacterName: CharacterNames,
  characters?: Character[] | null,
) => {
  if (!characters) return null
  return characters.filter(
    (character) => character.name === selectedCharacterName,
  )[0]
}

const groupBySkillCategory = (skills: SkillRelationType[]) => {
  const groupSkill = Map.groupBy<SkillCategories, SkillRelationType>(
    skills,
    (skill) => skill.skillCategory.name as SkillCategories,
  )
  return new Map(
    [...groupSkill].sort(
      ([categoryA], [categoryB]) =>
        skillCategoryPriority[categoryA] - skillCategoryPriority[categoryB],
    ),
  )
}

const schema = z.object({
  comboName: z
    .string()
    .min(1, 'コンボ名は必須です')
    .max(50, '50文字以内で入力してください'),
  damage: z
    .number({ invalid_type_error: 'ダメージの入力は必須です' })
    .min(0, '1以上の数値を入力してください')
    .max(99999, '99999以下で数値を入力してください'),
  hits: z
    .number({ invalid_type_error: 'ヒット数の入力は必須です' })
    .min(1, '1以上の数値を入力してください')
    .max(99, '99以下で数値を入力してください'),
  remark: z.string().min(0).max(1000, '1000文字以内で入力してください'),
})

const CreateCombo = () => {
  const query = useSearchParams()
  const characterName = query.get('characterName') as CharacterNames
  const ref = React.createRef<HTMLDivElement>()

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  )
  const [characters, setCharacters] = useState<Character[] | null>()
  const [skills, setSkills] = useState<SkillRelationType[]>([])
  const [selectedSkills, setSelectedSkills] = useState<SkillRelationType[]>([])
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy')
  const [driveGauge, setDriveGauge] = useState<GaugeLevel>(3)

  const addSelectedSkill = (skill: SkillRelationType) => {
    setSelectedSkills([...selectedSkills, skill])
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  useEffect(() => {
    startTransition(async () => {
      const characters = await getAllCharacters()
      const character = getSelectedCharacter(characterName, characters)
      setCharacters(characters)
      setSelectedCharacter(character)
      setSkills(await getSkillsByCharacter(character!.id))
    })
  }, [])

  useEffect(() => {
    startTransition(async () => {
      if (!selectedCharacter?.id) return
      setSkills(await getSkillsByCharacter(selectedCharacter.id))
    })
    setSelectedSkills([])
  }, [selectedCharacter])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [selectedSkills])

  const deleteSelectedSkill = (index: number) => {
    const result = selectedSkills.filter((_, i) => i !== index)
    setSelectedSkills(result)
  }

  const onSubmit = async (data: FieldValues) => {
    const authUser = await getCurrentAuthUser()
    if (!selectedCharacter || !authUser) return
    const user = await getUser(authUser.id)
    if (!user) return

    const comboData: CreateComboSchema = {
      id: uuidv4(),
      name: data.comboName,
      damage: data.damage,
      hits: data.hits,
      difficulty: difficulty,
      consumptionDriveGauge: driveGauge,
      characterId: selectedCharacter.id,
      remark: data.remark,
      userId: user.id,
    }
    console.log(comboData.id)
    const createdCombo = await createCombo(comboData)
    await createSkillsOnCombos(selectedSkills, createdCombo)
  }

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <Title title="Character select" />
          <select
            className="text-black text-2xl w-72 h-10 pl-2"
            name="characters"
            id="characters"
            value={selectedCharacter?.name}
            onChange={(e) =>
              setSelectedCharacter(
                getSelectedCharacter(
                  e.target.value as CharacterNames,
                  characters,
                ),
              )
            }
          >
            {characters?.map((character) => (
              <option
                key={character.id}
                value={character.name}
                label={character.name}
              >
                {character.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-8">
          <Title title="Combo Name" />
          <InputForm
            type="text"
            placeholder="画面端限定コンボ"
            registerName="comboName"
            register={register}
            errors={errors}
          />
        </div>
        <div className="mb-8">
          <Title title="Combo Skills" />
          <div className="sm:flex">
            <div className="grow h-[500px]">
              <div className="h-full overflow-y-auto bg-accentEmpty" ref={ref}>
                {selectedSkills.map((skill, i) => (
                  <SelectedSkillItem
                    key={i}
                    index={i}
                    skill={skill}
                    handleDeleteSkill={deleteSelectedSkill}
                  />
                ))}
              </div>
              {selectedSkills.length >= maxSkillLength && (
                <span className="text-accentRed">技の追加上限に達しました</span>
              )}
            </div>
            <div>
              <ul className="h-[500px] overflow-y-auto">
                {[...groupBySkillCategory(skills).entries()].map(
                  ([category, skills]) => (
                    <li key={category}>
                      <SkillCategoryDropDown
                        categoryName={category}
                        skills={skills}
                        handleClickSkill={addSelectedSkill}
                        disabled={selectedSkills.length >= maxSkillLength}
                      />
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 w-72">
          <Title title="Damage" />
          <InputForm
            type="number"
            placeholder="5000"
            registerName="damage"
            register={register}
            errors={errors}
          />
        </div>
        <div className="mb-8 w-72">
          <Title title="Hits" />
          <InputForm
            type="number"
            placeholder="10"
            registerName="hits"
            register={register}
            errors={errors}
          />
        </div>
        <div className="mb-8">
          <Title title="difficulty" />
          <div className="flex items-center">
            {['Easy', 'Normal', 'Hard', 'Very Hard'].map((level) => (
              <span key={level} className="mr-2">
                <Button
                  label={level}
                  color={difficulty !== level ? 'empty' : 'green'}
                  handleClick={() => setDifficulty(level as Difficulty)}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <Title title="Consumption Drive Gauge" />
          <DriveGauge
            gauge={driveGauge}
            editable={true}
            handleSelectGauge={setDriveGauge}
          />
        </div>
        <div className="mb-8">
          <Title title="Remark" />
          <div className="flex flex-col">
            <textarea
              rows={5}
              className="text-black text-2xl w-full p-2"
              {...register('remark')}
            />
            {errors.remark && (
              <span className="text-accentRed">
                {errors.remark.message?.toString()}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center my-16">
          <Button label="Create" type="submit" handleClick={() => {}} />
        </div>
      </form>
    </PageLayout>
  )
}

export default CreateCombo
