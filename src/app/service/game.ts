'use server'

import { CreateComboSchema, SkillRelationType } from "@/types/db/db-schema"
import { CharacterNames } from "@/types/util/character"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getCharacter = async (characterName: CharacterNames) => {
    return await prisma.character.findFirst({where: {name: characterName}})
}

export const getAllCharacters = async () => {
    return await prisma.character.findMany()
}

export const getAllSkills = async () => {
    return await prisma.skill.findMany()
}

export const getSkillsByCharacter = async (characterId: number) => {
    return await prisma.skill.findMany({
        where: {
            characterId: characterId
        },
        include: {
            commands: {
                include: {
                    command: true
                }
            },
            skillCategory: true
        }
    })
}

export const createSkillsOnCombos = async (skills: SkillRelationType[], combo: CreateComboSchema) => {
    skills.map(async (skill, i) => {
        const data = {
            skillId: skill.id,
            comboId: combo.id,
            order: i
        }
        await prisma.skillsOnCombos.create({
            data
        })
    })
}

export const createCombo = async (data: CreateComboSchema) => {
    return await prisma.combo.create({
        data
    })
}