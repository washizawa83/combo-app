import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','authId','name']);

export const CharacterScalarFieldEnumSchema = z.enum(['id','name']);

export const SkillScalarFieldEnumSchema = z.enum(['id','name','occurrenceFrame','continuationFrame','stiffeningFrame','straightnessDifferenceHit','straightnessDifferenceGuard','damage','comboCorrection','dGaugeIncrease','dGaugeDecreaseGuard','dGaugeDecreasePanisseCounter','saGaugeIncrease','attribute','remark','characterId','skillCategoryId','cancelCategory']);

export const SkillCategoryScalarFieldEnumSchema = z.enum(['id','name']);

export const CommandScalarFieldEnumSchema = z.enum(['id','name']);

export const CommandsOnSkillsScalarFieldEnumSchema = z.enum(['skillId','commandId','order']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  authId: z.string(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// CHARACTER SCHEMA
/////////////////////////////////////////

export const CharacterSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Character = z.infer<typeof CharacterSchema>

/////////////////////////////////////////
// SKILL SCHEMA
/////////////////////////////////////////

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().nullable(),
  continuationFrame: z.string().nullable(),
  stiffeningFrame: z.string().nullable(),
  straightnessDifferenceHit: z.string().nullable(),
  straightnessDifferenceGuard: z.string().nullable(),
  damage: z.string(),
  comboCorrection: z.string().nullable(),
  dGaugeIncrease: z.string().nullable(),
  dGaugeDecreaseGuard: z.string().nullable(),
  dGaugeDecreasePanisseCounter: z.string().nullable(),
  saGaugeIncrease: z.string().nullable(),
  attribute: z.string().nullable(),
  remark: z.string().nullable(),
  characterId: z.number().int(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().nullable(),
})

export type Skill = z.infer<typeof SkillSchema>

/////////////////////////////////////////
// SKILL CATEGORY SCHEMA
/////////////////////////////////////////

export const SkillCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type SkillCategory = z.infer<typeof SkillCategorySchema>

/////////////////////////////////////////
// COMMAND SCHEMA
/////////////////////////////////////////

export const CommandSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Command = z.infer<typeof CommandSchema>

/////////////////////////////////////////
// COMMANDS ON SKILLS SCHEMA
/////////////////////////////////////////

export const CommandsOnSkillsSchema = z.object({
  skillId: z.string(),
  commandId: z.string(),
  order: z.number().int(),
})

export type CommandsOnSkills = z.infer<typeof CommandsOnSkillsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  authId: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

// CHARACTER
//------------------------------------------------------

export const CharacterIncludeSchema: z.ZodType<Prisma.CharacterInclude> = z.object({
  skills: z.union([z.boolean(),z.lazy(() => SkillFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CharacterCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CharacterArgsSchema: z.ZodType<Prisma.CharacterDefaultArgs> = z.object({
  select: z.lazy(() => CharacterSelectSchema).optional(),
  include: z.lazy(() => CharacterIncludeSchema).optional(),
}).strict();

export const CharacterCountOutputTypeArgsSchema: z.ZodType<Prisma.CharacterCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CharacterCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CharacterCountOutputTypeSelectSchema: z.ZodType<Prisma.CharacterCountOutputTypeSelect> = z.object({
  skills: z.boolean().optional(),
}).strict();

export const CharacterSelectSchema: z.ZodType<Prisma.CharacterSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CharacterCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SKILL
//------------------------------------------------------

export const SkillIncludeSchema: z.ZodType<Prisma.SkillInclude> = z.object({
  character: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  skillCategory: z.union([z.boolean(),z.lazy(() => SkillCategoryArgsSchema)]).optional(),
  commands: z.union([z.boolean(),z.lazy(() => CommandsOnSkillsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SkillArgsSchema: z.ZodType<Prisma.SkillDefaultArgs> = z.object({
  select: z.lazy(() => SkillSelectSchema).optional(),
  include: z.lazy(() => SkillIncludeSchema).optional(),
}).strict();

export const SkillCountOutputTypeArgsSchema: z.ZodType<Prisma.SkillCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SkillCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SkillCountOutputTypeSelectSchema: z.ZodType<Prisma.SkillCountOutputTypeSelect> = z.object({
  commands: z.boolean().optional(),
}).strict();

export const SkillSelectSchema: z.ZodType<Prisma.SkillSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  occurrenceFrame: z.boolean().optional(),
  continuationFrame: z.boolean().optional(),
  stiffeningFrame: z.boolean().optional(),
  straightnessDifferenceHit: z.boolean().optional(),
  straightnessDifferenceGuard: z.boolean().optional(),
  damage: z.boolean().optional(),
  comboCorrection: z.boolean().optional(),
  dGaugeIncrease: z.boolean().optional(),
  dGaugeDecreaseGuard: z.boolean().optional(),
  dGaugeDecreasePanisseCounter: z.boolean().optional(),
  saGaugeIncrease: z.boolean().optional(),
  attribute: z.boolean().optional(),
  remark: z.boolean().optional(),
  characterId: z.boolean().optional(),
  skillCategoryId: z.boolean().optional(),
  cancelCategory: z.boolean().optional(),
  character: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  skillCategory: z.union([z.boolean(),z.lazy(() => SkillCategoryArgsSchema)]).optional(),
  commands: z.union([z.boolean(),z.lazy(() => CommandsOnSkillsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SKILL CATEGORY
//------------------------------------------------------

export const SkillCategoryIncludeSchema: z.ZodType<Prisma.SkillCategoryInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SkillCategoryArgsSchema: z.ZodType<Prisma.SkillCategoryDefaultArgs> = z.object({
  select: z.lazy(() => SkillCategorySelectSchema).optional(),
  include: z.lazy(() => SkillCategoryIncludeSchema).optional(),
}).strict();

export const SkillCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.SkillCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SkillCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SkillCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.SkillCategoryCountOutputTypeSelect> = z.object({
  skill: z.boolean().optional(),
}).strict();

export const SkillCategorySelectSchema: z.ZodType<Prisma.SkillCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMMAND
//------------------------------------------------------

export const CommandIncludeSchema: z.ZodType<Prisma.CommandInclude> = z.object({
  skills: z.union([z.boolean(),z.lazy(() => CommandsOnSkillsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CommandCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CommandArgsSchema: z.ZodType<Prisma.CommandDefaultArgs> = z.object({
  select: z.lazy(() => CommandSelectSchema).optional(),
  include: z.lazy(() => CommandIncludeSchema).optional(),
}).strict();

export const CommandCountOutputTypeArgsSchema: z.ZodType<Prisma.CommandCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CommandCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CommandCountOutputTypeSelectSchema: z.ZodType<Prisma.CommandCountOutputTypeSelect> = z.object({
  skills: z.boolean().optional(),
}).strict();

export const CommandSelectSchema: z.ZodType<Prisma.CommandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  skills: z.union([z.boolean(),z.lazy(() => CommandsOnSkillsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CommandCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMMANDS ON SKILLS
//------------------------------------------------------

export const CommandsOnSkillsIncludeSchema: z.ZodType<Prisma.CommandsOnSkillsInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  command: z.union([z.boolean(),z.lazy(() => CommandArgsSchema)]).optional(),
}).strict()

export const CommandsOnSkillsArgsSchema: z.ZodType<Prisma.CommandsOnSkillsDefaultArgs> = z.object({
  select: z.lazy(() => CommandsOnSkillsSelectSchema).optional(),
  include: z.lazy(() => CommandsOnSkillsIncludeSchema).optional(),
}).strict();

export const CommandsOnSkillsSelectSchema: z.ZodType<Prisma.CommandsOnSkillsSelect> = z.object({
  skillId: z.boolean().optional(),
  commandId: z.boolean().optional(),
  order: z.boolean().optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  command: z.union([z.boolean(),z.lazy(() => CommandArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    authId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    authId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  authId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CharacterWhereInputSchema: z.ZodType<Prisma.CharacterWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => SkillListRelationFilterSchema).optional()
}).strict();

export const CharacterOrderByWithRelationInputSchema: z.ZodType<Prisma.CharacterOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SkillOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CharacterWhereUniqueInputSchema: z.ZodType<Prisma.CharacterWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => SkillListRelationFilterSchema).optional()
}).strict());

export const CharacterOrderByWithAggregationInputSchema: z.ZodType<Prisma.CharacterOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CharacterCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CharacterAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CharacterMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CharacterMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CharacterSumOrderByAggregateInputSchema).optional()
}).strict();

export const CharacterScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CharacterScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema),z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema),z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const SkillWhereInputSchema: z.ZodType<Prisma.SkillWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  occurrenceFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  continuationFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stiffeningFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  damage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comboCorrection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attribute: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  remark: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  characterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillCategoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cancelCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  character: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  skillCategory: z.union([ z.lazy(() => SkillCategoryScalarRelationFilterSchema),z.lazy(() => SkillCategoryWhereInputSchema) ]).optional(),
  commands: z.lazy(() => CommandsOnSkillsListRelationFilterSchema).optional()
}).strict();

export const SkillOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  occurrenceFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  continuationFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stiffeningFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  straightnessDifferenceHit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  damage: z.lazy(() => SortOrderSchema).optional(),
  comboCorrection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeIncrease: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  saGaugeIncrease: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attribute: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  remark: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional(),
  cancelCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputSchema).optional(),
  skillCategory: z.lazy(() => SkillCategoryOrderByWithRelationInputSchema).optional(),
  commands: z.lazy(() => CommandsOnSkillsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SkillWhereUniqueInputSchema: z.ZodType<Prisma.SkillWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  occurrenceFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  continuationFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stiffeningFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  damage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comboCorrection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attribute: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  remark: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  characterId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  skillCategoryId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  cancelCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  character: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  skillCategory: z.union([ z.lazy(() => SkillCategoryScalarRelationFilterSchema),z.lazy(() => SkillCategoryWhereInputSchema) ]).optional(),
  commands: z.lazy(() => CommandsOnSkillsListRelationFilterSchema).optional()
}).strict());

export const SkillOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  occurrenceFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  continuationFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stiffeningFrame: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  straightnessDifferenceHit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  damage: z.lazy(() => SortOrderSchema).optional(),
  comboCorrection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeIncrease: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  saGaugeIncrease: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  attribute: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  remark: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional(),
  cancelCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => SkillCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillSumOrderByAggregateInputSchema).optional()
}).strict();

export const SkillScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  occurrenceFrame: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  continuationFrame: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  stiffeningFrame: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  damage: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  comboCorrection: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  attribute: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  remark: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  characterId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillCategoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  cancelCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SkillCategoryWhereInputSchema: z.ZodType<Prisma.SkillCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillCategoryWhereInputSchema),z.lazy(() => SkillCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillCategoryWhereInputSchema),z.lazy(() => SkillCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skill: z.lazy(() => SkillListRelationFilterSchema).optional()
}).strict();

export const SkillCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  skill: z.lazy(() => SkillOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SkillCategoryWhereUniqueInputSchema: z.ZodType<Prisma.SkillCategoryWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => SkillCategoryWhereInputSchema),z.lazy(() => SkillCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillCategoryWhereInputSchema),z.lazy(() => SkillCategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skill: z.lazy(() => SkillListRelationFilterSchema).optional()
}).strict());

export const SkillCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SkillCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SkillCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SkillCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SkillCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SkillCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SkillCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const SkillCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CommandWhereInputSchema: z.ZodType<Prisma.CommandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommandWhereInputSchema),z.lazy(() => CommandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandWhereInputSchema),z.lazy(() => CommandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => CommandsOnSkillsListRelationFilterSchema).optional()
}).strict();

export const CommandOrderByWithRelationInputSchema: z.ZodType<Prisma.CommandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => CommandsOnSkillsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CommandWhereUniqueInputSchema: z.ZodType<Prisma.CommandWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CommandWhereInputSchema),z.lazy(() => CommandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandWhereInputSchema),z.lazy(() => CommandWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => CommandsOnSkillsListRelationFilterSchema).optional()
}).strict());

export const CommandOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommandMinOrderByAggregateInputSchema).optional()
}).strict();

export const CommandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CommandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CommandScalarWhereWithAggregatesInputSchema),z.lazy(() => CommandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandScalarWhereWithAggregatesInputSchema),z.lazy(() => CommandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CommandsOnSkillsWhereInputSchema: z.ZodType<Prisma.CommandsOnSkillsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommandsOnSkillsWhereInputSchema),z.lazy(() => CommandsOnSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandsOnSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandsOnSkillsWhereInputSchema),z.lazy(() => CommandsOnSkillsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  commandId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skill: z.union([ z.lazy(() => SkillScalarRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  command: z.union([ z.lazy(() => CommandScalarRelationFilterSchema),z.lazy(() => CommandWhereInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsOrderByWithRelationInputSchema: z.ZodType<Prisma.CommandsOnSkillsOrderByWithRelationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  commandId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional(),
  command: z.lazy(() => CommandOrderByWithRelationInputSchema).optional()
}).strict();

export const CommandsOnSkillsWhereUniqueInputSchema: z.ZodType<Prisma.CommandsOnSkillsWhereUniqueInput> = z.object({
  skillId_commandId_order: z.lazy(() => CommandsOnSkillsSkillIdCommandIdOrderCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_commandId_order: z.lazy(() => CommandsOnSkillsSkillIdCommandIdOrderCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CommandsOnSkillsWhereInputSchema),z.lazy(() => CommandsOnSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandsOnSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandsOnSkillsWhereInputSchema),z.lazy(() => CommandsOnSkillsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  commandId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  skill: z.union([ z.lazy(() => SkillScalarRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  command: z.union([ z.lazy(() => CommandScalarRelationFilterSchema),z.lazy(() => CommandWhereInputSchema) ]).optional(),
}).strict());

export const CommandsOnSkillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommandsOnSkillsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  commandId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommandsOnSkillsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CommandsOnSkillsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommandsOnSkillsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommandsOnSkillsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CommandsOnSkillsSumOrderByAggregateInputSchema).optional()
}).strict();

export const CommandsOnSkillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CommandsOnSkillsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandsOnSkillsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  commandId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  authId: z.string(),
  name: z.string()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  authId: z.string(),
  name: z.string()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  authId: z.string(),
  name: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CharacterCreateInputSchema: z.ZodType<Prisma.CharacterCreateInput> = z.object({
  name: z.string(),
  skills: z.lazy(() => SkillCreateNestedManyWithoutCharacterInputSchema).optional()
}).strict();

export const CharacterUncheckedCreateInputSchema: z.ZodType<Prisma.CharacterUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  skills: z.lazy(() => SkillUncheckedCreateNestedManyWithoutCharacterInputSchema).optional()
}).strict();

export const CharacterUpdateInputSchema: z.ZodType<Prisma.CharacterUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.lazy(() => SkillUpdateManyWithoutCharacterNestedInputSchema).optional()
}).strict();

export const CharacterUncheckedUpdateInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.lazy(() => SkillUncheckedUpdateManyWithoutCharacterNestedInputSchema).optional()
}).strict();

export const CharacterCreateManyInputSchema: z.ZodType<Prisma.CharacterCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const CharacterUpdateManyMutationInputSchema: z.ZodType<Prisma.CharacterUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CharacterUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCreateInputSchema: z.ZodType<Prisma.SkillCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  cancelCategory: z.string().optional().nullable(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutSkillsInputSchema),
  skillCategory: z.lazy(() => SkillCategoryCreateNestedOneWithoutSkillInputSchema),
  commands: z.lazy(() => CommandsOnSkillsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillUncheckedCreateInputSchema: z.ZodType<Prisma.SkillUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  characterId: z.number().int(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillUpdateInputSchema: z.ZodType<Prisma.SkillUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skillCategory: z.lazy(() => SkillCategoryUpdateOneRequiredWithoutSkillNestedInputSchema).optional(),
  commands: z.lazy(() => CommandsOnSkillsUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  characterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skillCategoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillCreateManyInputSchema: z.ZodType<Prisma.SkillCreateManyInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  characterId: z.number().int(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().optional().nullable()
}).strict();

export const SkillUpdateManyMutationInputSchema: z.ZodType<Prisma.SkillUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SkillUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  characterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skillCategoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SkillCategoryCreateInputSchema: z.ZodType<Prisma.SkillCategoryCreateInput> = z.object({
  name: z.string(),
  skill: z.lazy(() => SkillCreateNestedManyWithoutSkillCategoryInputSchema).optional()
}).strict();

export const SkillCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.SkillCategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  skill: z.lazy(() => SkillUncheckedCreateNestedManyWithoutSkillCategoryInputSchema).optional()
}).strict();

export const SkillCategoryUpdateInputSchema: z.ZodType<Prisma.SkillCategoryUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skill: z.lazy(() => SkillUpdateManyWithoutSkillCategoryNestedInputSchema).optional()
}).strict();

export const SkillCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.SkillCategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skill: z.lazy(() => SkillUncheckedUpdateManyWithoutSkillCategoryNestedInputSchema).optional()
}).strict();

export const SkillCategoryCreateManyInputSchema: z.ZodType<Prisma.SkillCategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const SkillCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.SkillCategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SkillCategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandCreateInputSchema: z.ZodType<Prisma.CommandCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  skills: z.lazy(() => CommandsOnSkillsCreateNestedManyWithoutCommandInputSchema).optional()
}).strict();

export const CommandUncheckedCreateInputSchema: z.ZodType<Prisma.CommandUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  skills: z.lazy(() => CommandsOnSkillsUncheckedCreateNestedManyWithoutCommandInputSchema).optional()
}).strict();

export const CommandUpdateInputSchema: z.ZodType<Prisma.CommandUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.lazy(() => CommandsOnSkillsUpdateManyWithoutCommandNestedInputSchema).optional()
}).strict();

export const CommandUncheckedUpdateInputSchema: z.ZodType<Prisma.CommandUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutCommandNestedInputSchema).optional()
}).strict();

export const CommandCreateManyInputSchema: z.ZodType<Prisma.CommandCreateManyInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const CommandUpdateManyMutationInputSchema: z.ZodType<Prisma.CommandUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CommandUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsCreateInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateInput> = z.object({
  order: z.number().int(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutCommandsInputSchema),
  command: z.lazy(() => CommandCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export const CommandsOnSkillsUncheckedCreateInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedCreateInput> = z.object({
  skillId: z.string(),
  commandId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsUpdateInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateInput> = z.object({
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutCommandsNestedInputSchema).optional(),
  command: z.lazy(() => CommandUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export const CommandsOnSkillsUncheckedUpdateInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateInput> = z.object({
  skillId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  commandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsCreateManyInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManyInput> = z.object({
  skillId: z.string(),
  commandId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsUpdateManyMutationInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyMutationInput> = z.object({
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateManyInput> = z.object({
  skillId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  commandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const SkillListRelationFilterSchema: z.ZodType<Prisma.SkillListRelationFilter> = z.object({
  every: z.lazy(() => SkillWhereInputSchema).optional(),
  some: z.lazy(() => SkillWhereInputSchema).optional(),
  none: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export const SkillOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SkillOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterCountOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterMinOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterSumOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const CharacterScalarRelationFilterSchema: z.ZodType<Prisma.CharacterScalarRelationFilter> = z.object({
  is: z.lazy(() => CharacterWhereInputSchema).optional(),
  isNot: z.lazy(() => CharacterWhereInputSchema).optional()
}).strict();

export const SkillCategoryScalarRelationFilterSchema: z.ZodType<Prisma.SkillCategoryScalarRelationFilter> = z.object({
  is: z.lazy(() => SkillCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => SkillCategoryWhereInputSchema).optional()
}).strict();

export const CommandsOnSkillsListRelationFilterSchema: z.ZodType<Prisma.CommandsOnSkillsListRelationFilter> = z.object({
  every: z.lazy(() => CommandsOnSkillsWhereInputSchema).optional(),
  some: z.lazy(() => CommandsOnSkillsWhereInputSchema).optional(),
  none: z.lazy(() => CommandsOnSkillsWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const CommandsOnSkillsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  occurrenceFrame: z.lazy(() => SortOrderSchema).optional(),
  continuationFrame: z.lazy(() => SortOrderSchema).optional(),
  stiffeningFrame: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceHit: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceGuard: z.lazy(() => SortOrderSchema).optional(),
  damage: z.lazy(() => SortOrderSchema).optional(),
  comboCorrection: z.lazy(() => SortOrderSchema).optional(),
  dGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreaseGuard: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreasePanisseCounter: z.lazy(() => SortOrderSchema).optional(),
  saGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  attribute: z.lazy(() => SortOrderSchema).optional(),
  remark: z.lazy(() => SortOrderSchema).optional(),
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional(),
  cancelCategory: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillAvgOrderByAggregateInput> = z.object({
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkillMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  occurrenceFrame: z.lazy(() => SortOrderSchema).optional(),
  continuationFrame: z.lazy(() => SortOrderSchema).optional(),
  stiffeningFrame: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceHit: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceGuard: z.lazy(() => SortOrderSchema).optional(),
  damage: z.lazy(() => SortOrderSchema).optional(),
  comboCorrection: z.lazy(() => SortOrderSchema).optional(),
  dGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreaseGuard: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreasePanisseCounter: z.lazy(() => SortOrderSchema).optional(),
  saGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  attribute: z.lazy(() => SortOrderSchema).optional(),
  remark: z.lazy(() => SortOrderSchema).optional(),
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional(),
  cancelCategory: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillMinOrderByAggregateInputSchema: z.ZodType<Prisma.SkillMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  occurrenceFrame: z.lazy(() => SortOrderSchema).optional(),
  continuationFrame: z.lazy(() => SortOrderSchema).optional(),
  stiffeningFrame: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceHit: z.lazy(() => SortOrderSchema).optional(),
  straightnessDifferenceGuard: z.lazy(() => SortOrderSchema).optional(),
  damage: z.lazy(() => SortOrderSchema).optional(),
  comboCorrection: z.lazy(() => SortOrderSchema).optional(),
  dGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreaseGuard: z.lazy(() => SortOrderSchema).optional(),
  dGaugeDecreasePanisseCounter: z.lazy(() => SortOrderSchema).optional(),
  saGaugeIncrease: z.lazy(() => SortOrderSchema).optional(),
  attribute: z.lazy(() => SortOrderSchema).optional(),
  remark: z.lazy(() => SortOrderSchema).optional(),
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional(),
  cancelCategory: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillSumOrderByAggregateInputSchema: z.ZodType<Prisma.SkillSumOrderByAggregateInput> = z.object({
  characterId: z.lazy(() => SortOrderSchema).optional(),
  skillCategoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const SkillCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCategoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.SkillCategorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommandCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CommandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandMinOrderByAggregateInputSchema: z.ZodType<Prisma.CommandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillScalarRelationFilterSchema: z.ZodType<Prisma.SkillScalarRelationFilter> = z.object({
  is: z.lazy(() => SkillWhereInputSchema).optional(),
  isNot: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export const CommandScalarRelationFilterSchema: z.ZodType<Prisma.CommandScalarRelationFilter> = z.object({
  is: z.lazy(() => CommandWhereInputSchema).optional(),
  isNot: z.lazy(() => CommandWhereInputSchema).optional()
}).strict();

export const CommandsOnSkillsSkillIdCommandIdOrderCompoundUniqueInputSchema: z.ZodType<Prisma.CommandsOnSkillsSkillIdCommandIdOrderCompoundUniqueInput> = z.object({
  skillId: z.string(),
  commandId: z.string(),
  order: z.number()
}).strict();

export const CommandsOnSkillsCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsCountOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  commandId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandsOnSkillsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandsOnSkillsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsMaxOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  commandId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandsOnSkillsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsMinOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  commandId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CommandsOnSkillsSumOrderByAggregateInputSchema: z.ZodType<Prisma.CommandsOnSkillsSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const SkillCreateNestedManyWithoutCharacterInputSchema: z.ZodType<Prisma.SkillCreateNestedManyWithoutCharacterInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillCreateWithoutCharacterInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema),z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManyCharacterInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkillUncheckedCreateNestedManyWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutCharacterInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillCreateWithoutCharacterInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema),z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManyCharacterInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkillUpdateManyWithoutCharacterNestedInputSchema: z.ZodType<Prisma.SkillUpdateManyWithoutCharacterNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillCreateWithoutCharacterInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema),z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillUpsertWithWhereUniqueWithoutCharacterInputSchema),z.lazy(() => SkillUpsertWithWhereUniqueWithoutCharacterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManyCharacterInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillUpdateWithWhereUniqueWithoutCharacterInputSchema),z.lazy(() => SkillUpdateWithWhereUniqueWithoutCharacterInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillUpdateManyWithWhereWithoutCharacterInputSchema),z.lazy(() => SkillUpdateManyWithWhereWithoutCharacterInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const SkillUncheckedUpdateManyWithoutCharacterNestedInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutCharacterNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillCreateWithoutCharacterInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema),z.lazy(() => SkillCreateOrConnectWithoutCharacterInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillUpsertWithWhereUniqueWithoutCharacterInputSchema),z.lazy(() => SkillUpsertWithWhereUniqueWithoutCharacterInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManyCharacterInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillUpdateWithWhereUniqueWithoutCharacterInputSchema),z.lazy(() => SkillUpdateWithWhereUniqueWithoutCharacterInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillUpdateManyWithWhereWithoutCharacterInputSchema),z.lazy(() => SkillUpdateManyWithWhereWithoutCharacterInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CharacterCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional()
}).strict();

export const SkillCategoryCreateNestedOneWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryCreateNestedOneWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => SkillCategoryCreateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedCreateWithoutSkillInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCategoryCreateOrConnectWithoutSkillInputSchema).optional(),
  connect: z.lazy(() => SkillCategoryWhereUniqueInputSchema).optional()
}).strict();

export const CommandsOnSkillsCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedCreateNestedManyWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedCreateNestedManyWithoutSkillInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManySkillInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const CharacterUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CharacterUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => CharacterUpdateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export const SkillCategoryUpdateOneRequiredWithoutSkillNestedInputSchema: z.ZodType<Prisma.SkillCategoryUpdateOneRequiredWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCategoryCreateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedCreateWithoutSkillInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCategoryCreateOrConnectWithoutSkillInputSchema).optional(),
  upsert: z.lazy(() => SkillCategoryUpsertWithoutSkillInputSchema).optional(),
  connect: z.lazy(() => SkillCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillCategoryUpdateToOneWithWhereWithoutSkillInputSchema),z.lazy(() => SkillCategoryUpdateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedUpdateWithoutSkillInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SkillCreateNestedManyWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillCreateNestedManyWithoutSkillCategoryInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManySkillCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkillUncheckedCreateNestedManyWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutSkillCategoryInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManySkillCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SkillUpdateManyWithoutSkillCategoryNestedInputSchema: z.ZodType<Prisma.SkillUpdateManyWithoutSkillCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillUpsertWithWhereUniqueWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpsertWithWhereUniqueWithoutSkillCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManySkillCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillUpdateWithWhereUniqueWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpdateWithWhereUniqueWithoutSkillCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillUpdateManyWithWhereWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpdateManyWithWhereWithoutSkillCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SkillUncheckedUpdateManyWithoutSkillCategoryNestedInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutSkillCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema).array(),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema),z.lazy(() => SkillCreateOrConnectWithoutSkillCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SkillUpsertWithWhereUniqueWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpsertWithWhereUniqueWithoutSkillCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillCreateManySkillCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SkillWhereUniqueInputSchema),z.lazy(() => SkillWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SkillUpdateWithWhereUniqueWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpdateWithWhereUniqueWithoutSkillCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SkillUpdateManyWithWhereWithoutSkillCategoryInputSchema),z.lazy(() => SkillUpdateManyWithWhereWithoutSkillCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsCreateNestedManyWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateNestedManyWithoutCommandInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManyCommandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedCreateNestedManyWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedCreateNestedManyWithoutCommandInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManyCommandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsUpdateManyWithoutCommandNestedInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyWithoutCommandNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManyCommandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutCommandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedUpdateManyWithoutCommandNestedInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateManyWithoutCommandNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema).array(),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommandsOnSkillsCreateManyCommandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUpdateManyWithWhereWithoutCommandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SkillCreateNestedOneWithoutCommandsInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutCommandsInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCommandsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutCommandsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export const CommandCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.CommandCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => CommandCreateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CommandCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => CommandWhereUniqueInputSchema).optional()
}).strict();

export const SkillUpdateOneRequiredWithoutCommandsNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutCommandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCommandsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutCommandsInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutCommandsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutCommandsInputSchema),z.lazy(() => SkillUpdateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutCommandsInputSchema) ]).optional(),
}).strict();

export const CommandUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.CommandUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommandCreateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CommandCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => CommandUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => CommandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CommandUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => CommandUpdateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SkillCreateWithoutCharacterInputSchema: z.ZodType<Prisma.SkillCreateWithoutCharacterInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  cancelCategory: z.string().optional().nullable(),
  skillCategory: z.lazy(() => SkillCategoryCreateNestedOneWithoutSkillInputSchema),
  commands: z.lazy(() => CommandsOnSkillsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillUncheckedCreateWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutCharacterInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillCreateOrConnectWithoutCharacterInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutCharacterInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema) ]),
}).strict();

export const SkillCreateManyCharacterInputEnvelopeSchema: z.ZodType<Prisma.SkillCreateManyCharacterInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillCreateManyCharacterInputSchema),z.lazy(() => SkillCreateManyCharacterInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SkillUpsertWithWhereUniqueWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillUpdateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutCharacterInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCharacterInputSchema) ]),
}).strict();

export const SkillUpdateWithWhereUniqueWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillUpdateWithoutCharacterInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutCharacterInputSchema) ]),
}).strict();

export const SkillUpdateManyWithWhereWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUpdateManyWithWhereWithoutCharacterInput> = z.object({
  where: z.lazy(() => SkillScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillUpdateManyMutationInputSchema),z.lazy(() => SkillUncheckedUpdateManyWithoutCharacterInputSchema) ]),
}).strict();

export const SkillScalarWhereInputSchema: z.ZodType<Prisma.SkillScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillScalarWhereInputSchema),z.lazy(() => SkillScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  occurrenceFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  continuationFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stiffeningFrame: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  damage: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comboCorrection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  attribute: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  remark: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  characterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillCategoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cancelCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CharacterCreateWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterCreateWithoutSkillsInput> = z.object({
  name: z.string()
}).strict();

export const CharacterUncheckedCreateWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterUncheckedCreateWithoutSkillsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const CharacterCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CharacterCreateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export const SkillCategoryCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryCreateWithoutSkillInput> = z.object({
  name: z.string()
}).strict();

export const SkillCategoryUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryUncheckedCreateWithoutSkillInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const SkillCategoryCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCategoryCreateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export const CommandsOnSkillsCreateWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateWithoutSkillInput> = z.object({
  order: z.number().int(),
  command: z.lazy(() => CommandCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export const CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedCreateWithoutSkillInput> = z.object({
  commandId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export const CommandsOnSkillsCreateManySkillInputEnvelopeSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManySkillInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommandsOnSkillsCreateManySkillInputSchema),z.lazy(() => CommandsOnSkillsCreateManySkillInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CharacterUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => CharacterUpdateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => CharacterCreateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => CharacterWhereInputSchema).optional()
}).strict();

export const CharacterUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => CharacterWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CharacterUpdateWithoutSkillsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export const CharacterUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterUpdateWithoutSkillsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CharacterUncheckedUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateWithoutSkillsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCategoryUpsertWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryUpsertWithoutSkillInput> = z.object({
  update: z.union([ z.lazy(() => SkillCategoryUpdateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCategoryCreateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedCreateWithoutSkillInputSchema) ]),
  where: z.lazy(() => SkillCategoryWhereInputSchema).optional()
}).strict();

export const SkillCategoryUpdateToOneWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryUpdateToOneWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillCategoryUpdateWithoutSkillInputSchema),z.lazy(() => SkillCategoryUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export const SkillCategoryUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryUpdateWithoutSkillInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCategoryUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.SkillCategoryUncheckedUpdateWithoutSkillInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export const CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithoutSkillInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export const CommandsOnSkillsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyMutationInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export const CommandsOnSkillsScalarWhereInputSchema: z.ZodType<Prisma.CommandsOnSkillsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),z.lazy(() => CommandsOnSkillsScalarWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  commandId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const SkillCreateWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillCreateWithoutSkillCategoryInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  cancelCategory: z.string().optional().nullable(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutSkillsInputSchema),
  commands: z.lazy(() => CommandsOnSkillsCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillUncheckedCreateWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutSkillCategoryInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  characterId: z.number().int(),
  cancelCategory: z.string().optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedCreateNestedManyWithoutSkillInputSchema).optional()
}).strict();

export const SkillCreateOrConnectWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutSkillCategoryInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema) ]),
}).strict();

export const SkillCreateManySkillCategoryInputEnvelopeSchema: z.ZodType<Prisma.SkillCreateManySkillCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SkillCreateManySkillCategoryInputSchema),z.lazy(() => SkillCreateManySkillCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SkillUpsertWithWhereUniqueWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutSkillCategoryInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillUpdateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutSkillCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedCreateWithoutSkillCategoryInputSchema) ]),
}).strict();

export const SkillUpdateWithWhereUniqueWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutSkillCategoryInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillUpdateWithoutSkillCategoryInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutSkillCategoryInputSchema) ]),
}).strict();

export const SkillUpdateManyWithWhereWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUpdateManyWithWhereWithoutSkillCategoryInput> = z.object({
  where: z.lazy(() => SkillScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SkillUpdateManyMutationInputSchema),z.lazy(() => SkillUncheckedUpdateManyWithoutSkillCategoryInputSchema) ]),
}).strict();

export const CommandsOnSkillsCreateWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateWithoutCommandInput> = z.object({
  order: z.number().int(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutCommandsInputSchema)
}).strict();

export const CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedCreateWithoutCommandInput> = z.object({
  skillId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsCreateOrConnectWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateOrConnectWithoutCommandInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema) ]),
}).strict();

export const CommandsOnSkillsCreateManyCommandInputEnvelopeSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManyCommandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommandsOnSkillsCreateManyCommandInputSchema),z.lazy(() => CommandsOnSkillsCreateManyCommandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpsertWithWhereUniqueWithoutCommandInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateWithoutCommandInputSchema) ]),
  create: z.union([ z.lazy(() => CommandsOnSkillsCreateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedCreateWithoutCommandInputSchema) ]),
}).strict();

export const CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateWithWhereUniqueWithoutCommandInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommandsOnSkillsUpdateWithoutCommandInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateWithoutCommandInputSchema) ]),
}).strict();

export const CommandsOnSkillsUpdateManyWithWhereWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyWithWhereWithoutCommandInput> = z.object({
  where: z.lazy(() => CommandsOnSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommandsOnSkillsUpdateManyMutationInputSchema),z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutCommandInputSchema) ]),
}).strict();

export const SkillCreateWithoutCommandsInputSchema: z.ZodType<Prisma.SkillCreateWithoutCommandsInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  cancelCategory: z.string().optional().nullable(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutSkillsInputSchema),
  skillCategory: z.lazy(() => SkillCategoryCreateNestedOneWithoutSkillInputSchema)
}).strict();

export const SkillUncheckedCreateWithoutCommandsInputSchema: z.ZodType<Prisma.SkillUncheckedCreateWithoutCommandsInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  characterId: z.number().int(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().optional().nullable()
}).strict();

export const SkillCreateOrConnectWithoutCommandsInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutCommandsInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCommandsInputSchema) ]),
}).strict();

export const CommandCreateWithoutSkillsInputSchema: z.ZodType<Prisma.CommandCreateWithoutSkillsInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const CommandUncheckedCreateWithoutSkillsInputSchema: z.ZodType<Prisma.CommandUncheckedCreateWithoutSkillsInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export const CommandCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.CommandCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => CommandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommandCreateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export const SkillUpsertWithoutCommandsInputSchema: z.ZodType<Prisma.SkillUpsertWithoutCommandsInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutCommandsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutCommandsInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export const SkillUpdateToOneWithWhereWithoutCommandsInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutCommandsInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutCommandsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutCommandsInputSchema) ]),
}).strict();

export const SkillUpdateWithoutCommandsInputSchema: z.ZodType<Prisma.SkillUpdateWithoutCommandsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  skillCategory: z.lazy(() => SkillCategoryUpdateOneRequiredWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateWithoutCommandsInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutCommandsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  characterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skillCategoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CommandUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.CommandUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => CommandUpdateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => CommandCreateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => CommandWhereInputSchema).optional()
}).strict();

export const CommandUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.CommandUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => CommandWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CommandUpdateWithoutSkillsInputSchema),z.lazy(() => CommandUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export const CommandUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.CommandUpdateWithoutSkillsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandUncheckedUpdateWithoutSkillsInputSchema: z.ZodType<Prisma.CommandUncheckedUpdateWithoutSkillsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCreateManyCharacterInputSchema: z.ZodType<Prisma.SkillCreateManyCharacterInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  skillCategoryId: z.number().int(),
  cancelCategory: z.string().optional().nullable()
}).strict();

export const SkillUpdateWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUpdateWithoutCharacterInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillCategory: z.lazy(() => SkillCategoryUpdateOneRequiredWithoutSkillNestedInputSchema).optional(),
  commands: z.lazy(() => CommandsOnSkillsUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutCharacterInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillCategoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateManyWithoutCharacterInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutCharacterInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skillCategoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CommandsOnSkillsCreateManySkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManySkillInput> = z.object({
  commandId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateWithoutSkillInput> = z.object({
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  command: z.lazy(() => CommandUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export const CommandsOnSkillsUncheckedUpdateWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateWithoutSkillInput> = z.object({
  commandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedUpdateManyWithoutSkillInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateManyWithoutSkillInput> = z.object({
  commandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SkillCreateManySkillCategoryInputSchema: z.ZodType<Prisma.SkillCreateManySkillCategoryInput> = z.object({
  id: z.string(),
  name: z.string(),
  occurrenceFrame: z.string().optional().nullable(),
  continuationFrame: z.string().optional().nullable(),
  stiffeningFrame: z.string().optional().nullable(),
  straightnessDifferenceHit: z.string().optional().nullable(),
  straightnessDifferenceGuard: z.string().optional().nullable(),
  damage: z.string(),
  comboCorrection: z.string().optional().nullable(),
  dGaugeIncrease: z.string().optional().nullable(),
  dGaugeDecreaseGuard: z.string().optional().nullable(),
  dGaugeDecreasePanisseCounter: z.string().optional().nullable(),
  saGaugeIncrease: z.string().optional().nullable(),
  attribute: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  characterId: z.number().int(),
  cancelCategory: z.string().optional().nullable()
}).strict();

export const SkillUpdateWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUpdateWithoutSkillCategoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutSkillsNestedInputSchema).optional(),
  commands: z.lazy(() => CommandsOnSkillsUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutSkillCategoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  characterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  commands: z.lazy(() => CommandsOnSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema).optional()
}).strict();

export const SkillUncheckedUpdateManyWithoutSkillCategoryInputSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutSkillCategoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  occurrenceFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  continuationFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stiffeningFrame: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceHit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  straightnessDifferenceGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  damage: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comboCorrection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreaseGuard: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dGaugeDecreasePanisseCounter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  saGaugeIncrease: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  attribute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  remark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  characterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  cancelCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CommandsOnSkillsCreateManyCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManyCommandInput> = z.object({
  skillId: z.string(),
  order: z.number().int()
}).strict();

export const CommandsOnSkillsUpdateWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateWithoutCommandInput> = z.object({
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutCommandsNestedInputSchema).optional()
}).strict();

export const CommandsOnSkillsUncheckedUpdateWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateWithoutCommandInput> = z.object({
  skillId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CommandsOnSkillsUncheckedUpdateManyWithoutCommandInputSchema: z.ZodType<Prisma.CommandsOnSkillsUncheckedUpdateManyWithoutCommandInput> = z.object({
  skillId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const CharacterFindFirstArgsSchema: z.ZodType<Prisma.CharacterFindFirstArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CharacterFindFirstOrThrowArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterFindManyArgsSchema: z.ZodType<Prisma.CharacterFindManyArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterAggregateArgsSchema: z.ZodType<Prisma.CharacterAggregateArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CharacterGroupByArgsSchema: z.ZodType<Prisma.CharacterGroupByArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithAggregationInputSchema.array(),CharacterOrderByWithAggregationInputSchema ]).optional(),
  by: CharacterScalarFieldEnumSchema.array(),
  having: CharacterScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CharacterFindUniqueArgsSchema: z.ZodType<Prisma.CharacterFindUniqueArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const SkillFindFirstArgsSchema: z.ZodType<Prisma.SkillFindFirstArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillScalarFieldEnumSchema,SkillScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkillFindFirstOrThrowArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillScalarFieldEnumSchema,SkillScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillFindManyArgsSchema: z.ZodType<Prisma.SkillFindManyArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillScalarFieldEnumSchema,SkillScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillAggregateArgsSchema: z.ZodType<Prisma.SkillAggregateArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithRelationInputSchema.array(),SkillOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SkillGroupByArgsSchema: z.ZodType<Prisma.SkillGroupByArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
  orderBy: z.union([ SkillOrderByWithAggregationInputSchema.array(),SkillOrderByWithAggregationInputSchema ]).optional(),
  by: SkillScalarFieldEnumSchema.array(),
  having: SkillScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SkillFindUniqueArgsSchema: z.ZodType<Prisma.SkillFindUniqueArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereUniqueInputSchema,
}).strict() ;

export const SkillFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SkillFindUniqueOrThrowArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereUniqueInputSchema,
}).strict() ;

export const SkillCategoryFindFirstArgsSchema: z.ZodType<Prisma.SkillCategoryFindFirstArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SkillCategoryOrderByWithRelationInputSchema.array(),SkillCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillCategoryScalarFieldEnumSchema,SkillCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SkillCategoryFindFirstOrThrowArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SkillCategoryOrderByWithRelationInputSchema.array(),SkillCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillCategoryScalarFieldEnumSchema,SkillCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillCategoryFindManyArgsSchema: z.ZodType<Prisma.SkillCategoryFindManyArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SkillCategoryOrderByWithRelationInputSchema.array(),SkillCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SkillCategoryScalarFieldEnumSchema,SkillCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SkillCategoryAggregateArgsSchema: z.ZodType<Prisma.SkillCategoryAggregateArgs> = z.object({
  where: SkillCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SkillCategoryOrderByWithRelationInputSchema.array(),SkillCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SkillCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SkillCategoryGroupByArgsSchema: z.ZodType<Prisma.SkillCategoryGroupByArgs> = z.object({
  where: SkillCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SkillCategoryOrderByWithAggregationInputSchema.array(),SkillCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: SkillCategoryScalarFieldEnumSchema.array(),
  having: SkillCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SkillCategoryFindUniqueArgsSchema: z.ZodType<Prisma.SkillCategoryFindUniqueArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereUniqueInputSchema,
}).strict() ;

export const SkillCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SkillCategoryFindUniqueOrThrowArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereUniqueInputSchema,
}).strict() ;

export const CommandFindFirstArgsSchema: z.ZodType<Prisma.CommandFindFirstArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereInputSchema.optional(),
  orderBy: z.union([ CommandOrderByWithRelationInputSchema.array(),CommandOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandScalarFieldEnumSchema,CommandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommandFindFirstOrThrowArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereInputSchema.optional(),
  orderBy: z.union([ CommandOrderByWithRelationInputSchema.array(),CommandOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandScalarFieldEnumSchema,CommandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandFindManyArgsSchema: z.ZodType<Prisma.CommandFindManyArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereInputSchema.optional(),
  orderBy: z.union([ CommandOrderByWithRelationInputSchema.array(),CommandOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandScalarFieldEnumSchema,CommandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandAggregateArgsSchema: z.ZodType<Prisma.CommandAggregateArgs> = z.object({
  where: CommandWhereInputSchema.optional(),
  orderBy: z.union([ CommandOrderByWithRelationInputSchema.array(),CommandOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommandGroupByArgsSchema: z.ZodType<Prisma.CommandGroupByArgs> = z.object({
  where: CommandWhereInputSchema.optional(),
  orderBy: z.union([ CommandOrderByWithAggregationInputSchema.array(),CommandOrderByWithAggregationInputSchema ]).optional(),
  by: CommandScalarFieldEnumSchema.array(),
  having: CommandScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommandFindUniqueArgsSchema: z.ZodType<Prisma.CommandFindUniqueArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereUniqueInputSchema,
}).strict() ;

export const CommandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CommandFindUniqueOrThrowArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereUniqueInputSchema,
}).strict() ;

export const CommandsOnSkillsFindFirstArgsSchema: z.ZodType<Prisma.CommandsOnSkillsFindFirstArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereInputSchema.optional(),
  orderBy: z.union([ CommandsOnSkillsOrderByWithRelationInputSchema.array(),CommandsOnSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandsOnSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandsOnSkillsScalarFieldEnumSchema,CommandsOnSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandsOnSkillsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommandsOnSkillsFindFirstOrThrowArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereInputSchema.optional(),
  orderBy: z.union([ CommandsOnSkillsOrderByWithRelationInputSchema.array(),CommandsOnSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandsOnSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandsOnSkillsScalarFieldEnumSchema,CommandsOnSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandsOnSkillsFindManyArgsSchema: z.ZodType<Prisma.CommandsOnSkillsFindManyArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereInputSchema.optional(),
  orderBy: z.union([ CommandsOnSkillsOrderByWithRelationInputSchema.array(),CommandsOnSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandsOnSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommandsOnSkillsScalarFieldEnumSchema,CommandsOnSkillsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CommandsOnSkillsAggregateArgsSchema: z.ZodType<Prisma.CommandsOnSkillsAggregateArgs> = z.object({
  where: CommandsOnSkillsWhereInputSchema.optional(),
  orderBy: z.union([ CommandsOnSkillsOrderByWithRelationInputSchema.array(),CommandsOnSkillsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommandsOnSkillsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommandsOnSkillsGroupByArgsSchema: z.ZodType<Prisma.CommandsOnSkillsGroupByArgs> = z.object({
  where: CommandsOnSkillsWhereInputSchema.optional(),
  orderBy: z.union([ CommandsOnSkillsOrderByWithAggregationInputSchema.array(),CommandsOnSkillsOrderByWithAggregationInputSchema ]).optional(),
  by: CommandsOnSkillsScalarFieldEnumSchema.array(),
  having: CommandsOnSkillsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CommandsOnSkillsFindUniqueArgsSchema: z.ZodType<Prisma.CommandsOnSkillsFindUniqueArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereUniqueInputSchema,
}).strict() ;

export const CommandsOnSkillsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CommandsOnSkillsFindUniqueOrThrowArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterCreateArgsSchema: z.ZodType<Prisma.CharacterCreateArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  data: z.union([ CharacterCreateInputSchema,CharacterUncheckedCreateInputSchema ]),
}).strict() ;

export const CharacterUpsertArgsSchema: z.ZodType<Prisma.CharacterUpsertArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
  create: z.union([ CharacterCreateInputSchema,CharacterUncheckedCreateInputSchema ]),
  update: z.union([ CharacterUpdateInputSchema,CharacterUncheckedUpdateInputSchema ]),
}).strict() ;

export const CharacterCreateManyArgsSchema: z.ZodType<Prisma.CharacterCreateManyArgs> = z.object({
  data: z.union([ CharacterCreateManyInputSchema,CharacterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CharacterCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CharacterCreateManyAndReturnArgs> = z.object({
  data: z.union([ CharacterCreateManyInputSchema,CharacterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CharacterDeleteArgsSchema: z.ZodType<Prisma.CharacterDeleteArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterUpdateArgsSchema: z.ZodType<Prisma.CharacterUpdateArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  data: z.union([ CharacterUpdateInputSchema,CharacterUncheckedUpdateInputSchema ]),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterUpdateManyArgsSchema: z.ZodType<Prisma.CharacterUpdateManyArgs> = z.object({
  data: z.union([ CharacterUpdateManyMutationInputSchema,CharacterUncheckedUpdateManyInputSchema ]),
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CharacterUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CharacterUpdateManyMutationInputSchema,CharacterUncheckedUpdateManyInputSchema ]),
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterDeleteManyArgsSchema: z.ZodType<Prisma.CharacterDeleteManyArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillCreateArgsSchema: z.ZodType<Prisma.SkillCreateArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  data: z.union([ SkillCreateInputSchema,SkillUncheckedCreateInputSchema ]),
}).strict() ;

export const SkillUpsertArgsSchema: z.ZodType<Prisma.SkillUpsertArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereUniqueInputSchema,
  create: z.union([ SkillCreateInputSchema,SkillUncheckedCreateInputSchema ]),
  update: z.union([ SkillUpdateInputSchema,SkillUncheckedUpdateInputSchema ]),
}).strict() ;

export const SkillCreateManyArgsSchema: z.ZodType<Prisma.SkillCreateManyArgs> = z.object({
  data: z.union([ SkillCreateManyInputSchema,SkillCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SkillCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SkillCreateManyAndReturnArgs> = z.object({
  data: z.union([ SkillCreateManyInputSchema,SkillCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SkillDeleteArgsSchema: z.ZodType<Prisma.SkillDeleteArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  where: SkillWhereUniqueInputSchema,
}).strict() ;

export const SkillUpdateArgsSchema: z.ZodType<Prisma.SkillUpdateArgs> = z.object({
  select: SkillSelectSchema.optional(),
  include: SkillIncludeSchema.optional(),
  data: z.union([ SkillUpdateInputSchema,SkillUncheckedUpdateInputSchema ]),
  where: SkillWhereUniqueInputSchema,
}).strict() ;

export const SkillUpdateManyArgsSchema: z.ZodType<Prisma.SkillUpdateManyArgs> = z.object({
  data: z.union([ SkillUpdateManyMutationInputSchema,SkillUncheckedUpdateManyInputSchema ]),
  where: SkillWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SkillUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SkillUpdateManyMutationInputSchema,SkillUncheckedUpdateManyInputSchema ]),
  where: SkillWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillDeleteManyArgsSchema: z.ZodType<Prisma.SkillDeleteManyArgs> = z.object({
  where: SkillWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillCategoryCreateArgsSchema: z.ZodType<Prisma.SkillCategoryCreateArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  data: z.union([ SkillCategoryCreateInputSchema,SkillCategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const SkillCategoryUpsertArgsSchema: z.ZodType<Prisma.SkillCategoryUpsertArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereUniqueInputSchema,
  create: z.union([ SkillCategoryCreateInputSchema,SkillCategoryUncheckedCreateInputSchema ]),
  update: z.union([ SkillCategoryUpdateInputSchema,SkillCategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const SkillCategoryCreateManyArgsSchema: z.ZodType<Prisma.SkillCategoryCreateManyArgs> = z.object({
  data: z.union([ SkillCategoryCreateManyInputSchema,SkillCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SkillCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SkillCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SkillCategoryCreateManyInputSchema,SkillCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SkillCategoryDeleteArgsSchema: z.ZodType<Prisma.SkillCategoryDeleteArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  where: SkillCategoryWhereUniqueInputSchema,
}).strict() ;

export const SkillCategoryUpdateArgsSchema: z.ZodType<Prisma.SkillCategoryUpdateArgs> = z.object({
  select: SkillCategorySelectSchema.optional(),
  include: SkillCategoryIncludeSchema.optional(),
  data: z.union([ SkillCategoryUpdateInputSchema,SkillCategoryUncheckedUpdateInputSchema ]),
  where: SkillCategoryWhereUniqueInputSchema,
}).strict() ;

export const SkillCategoryUpdateManyArgsSchema: z.ZodType<Prisma.SkillCategoryUpdateManyArgs> = z.object({
  data: z.union([ SkillCategoryUpdateManyMutationInputSchema,SkillCategoryUncheckedUpdateManyInputSchema ]),
  where: SkillCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillCategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SkillCategoryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SkillCategoryUpdateManyMutationInputSchema,SkillCategoryUncheckedUpdateManyInputSchema ]),
  where: SkillCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SkillCategoryDeleteManyArgsSchema: z.ZodType<Prisma.SkillCategoryDeleteManyArgs> = z.object({
  where: SkillCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandCreateArgsSchema: z.ZodType<Prisma.CommandCreateArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  data: z.union([ CommandCreateInputSchema,CommandUncheckedCreateInputSchema ]),
}).strict() ;

export const CommandUpsertArgsSchema: z.ZodType<Prisma.CommandUpsertArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereUniqueInputSchema,
  create: z.union([ CommandCreateInputSchema,CommandUncheckedCreateInputSchema ]),
  update: z.union([ CommandUpdateInputSchema,CommandUncheckedUpdateInputSchema ]),
}).strict() ;

export const CommandCreateManyArgsSchema: z.ZodType<Prisma.CommandCreateManyArgs> = z.object({
  data: z.union([ CommandCreateManyInputSchema,CommandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommandCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CommandCreateManyAndReturnArgs> = z.object({
  data: z.union([ CommandCreateManyInputSchema,CommandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommandDeleteArgsSchema: z.ZodType<Prisma.CommandDeleteArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  where: CommandWhereUniqueInputSchema,
}).strict() ;

export const CommandUpdateArgsSchema: z.ZodType<Prisma.CommandUpdateArgs> = z.object({
  select: CommandSelectSchema.optional(),
  include: CommandIncludeSchema.optional(),
  data: z.union([ CommandUpdateInputSchema,CommandUncheckedUpdateInputSchema ]),
  where: CommandWhereUniqueInputSchema,
}).strict() ;

export const CommandUpdateManyArgsSchema: z.ZodType<Prisma.CommandUpdateManyArgs> = z.object({
  data: z.union([ CommandUpdateManyMutationInputSchema,CommandUncheckedUpdateManyInputSchema ]),
  where: CommandWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CommandUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CommandUpdateManyMutationInputSchema,CommandUncheckedUpdateManyInputSchema ]),
  where: CommandWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandDeleteManyArgsSchema: z.ZodType<Prisma.CommandDeleteManyArgs> = z.object({
  where: CommandWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandsOnSkillsCreateArgsSchema: z.ZodType<Prisma.CommandsOnSkillsCreateArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  data: z.union([ CommandsOnSkillsCreateInputSchema,CommandsOnSkillsUncheckedCreateInputSchema ]),
}).strict() ;

export const CommandsOnSkillsUpsertArgsSchema: z.ZodType<Prisma.CommandsOnSkillsUpsertArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereUniqueInputSchema,
  create: z.union([ CommandsOnSkillsCreateInputSchema,CommandsOnSkillsUncheckedCreateInputSchema ]),
  update: z.union([ CommandsOnSkillsUpdateInputSchema,CommandsOnSkillsUncheckedUpdateInputSchema ]),
}).strict() ;

export const CommandsOnSkillsCreateManyArgsSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManyArgs> = z.object({
  data: z.union([ CommandsOnSkillsCreateManyInputSchema,CommandsOnSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommandsOnSkillsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CommandsOnSkillsCreateManyAndReturnArgs> = z.object({
  data: z.union([ CommandsOnSkillsCreateManyInputSchema,CommandsOnSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CommandsOnSkillsDeleteArgsSchema: z.ZodType<Prisma.CommandsOnSkillsDeleteArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  where: CommandsOnSkillsWhereUniqueInputSchema,
}).strict() ;

export const CommandsOnSkillsUpdateArgsSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateArgs> = z.object({
  select: CommandsOnSkillsSelectSchema.optional(),
  include: CommandsOnSkillsIncludeSchema.optional(),
  data: z.union([ CommandsOnSkillsUpdateInputSchema,CommandsOnSkillsUncheckedUpdateInputSchema ]),
  where: CommandsOnSkillsWhereUniqueInputSchema,
}).strict() ;

export const CommandsOnSkillsUpdateManyArgsSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyArgs> = z.object({
  data: z.union([ CommandsOnSkillsUpdateManyMutationInputSchema,CommandsOnSkillsUncheckedUpdateManyInputSchema ]),
  where: CommandsOnSkillsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandsOnSkillsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CommandsOnSkillsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CommandsOnSkillsUpdateManyMutationInputSchema,CommandsOnSkillsUncheckedUpdateManyInputSchema ]),
  where: CommandsOnSkillsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CommandsOnSkillsDeleteManyArgsSchema: z.ZodType<Prisma.CommandsOnSkillsDeleteManyArgs> = z.object({
  where: CommandsOnSkillsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;