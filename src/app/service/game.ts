'use server'

import { CharacterNames } from "@/types/util/character"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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

export const getCharacter = async (characterName: CharacterNames) => {
    return await prisma.character.findFirst({where: {name: characterName}})
}

export const getAllCharacters = async () => {
    return await prisma.character.findMany()
}