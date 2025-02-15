import { CommandsOnSkills, Skill, SkillCategory } from "@prisma/client";

export type SkillRelationType = (Skill & { commands: CommandsOnSkills[] } & {skillCategory: SkillCategory})

export type SkillCategories = '通常技' | '特殊技'  | '必殺技' | 'スーパーアーツ' | '通常投げ' | '共通システム'