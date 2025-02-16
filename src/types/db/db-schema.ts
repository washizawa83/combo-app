import { CommandsOnSkills, Skill, SkillCategory } from "@prisma/client";

export type SkillRelationType = (Skill & { commands: CommandsOnSkills[] } & {skillCategory: SkillCategory})

export type SkillCategories = '通常技' | '特殊技'  | '必殺技' | 'スーパーアーツ' | '通常投げ' | '共通システム'

export type CreateComboSchema = {
    id: string
    name: string,
    damage: number,
    hits: number,
    difficulty: string,
    consumptionDriveGauge: number,
    remark: string | null
    characterId: number
    userId: string
}

export type CreateComboAndSkillsSchema = {skillId: number} & CreateComboSchema