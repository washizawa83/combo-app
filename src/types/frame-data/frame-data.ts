export type FrameData = {
    id: string,
    name: string,
    skillCategory: SkillCategory,
    commands: Command[],
    continuationFrame: string | null,
    stiffeningFrame: string | null,
    straightnessDifferenceHit: string | null,
    straightnessDifferenceGuard: string | null,
    cancelCategory: string | null,
    damage: string,
    comboCorrection: string | null,
    dGaugeIncrease: string | null,
    dGaugeDecreaseGuard: string | null,
    dGaugeDecreasePanisseCounter: string | null,
    saGaugeIncrease: string | null,
    attribute: string | null,
    remark: string | null
}

export type SkillCategory = '通常技' | '特殊技' | '必殺技' | 'スーパーアーツ' | '共通システム'
export type Command = 'arrow_3' | 'icon_kick' | 'icon_kick_h' | 'icon_kick_l' | 'icon_kick_m' | 'icon_punch' | 'icon_punch_h' | 'icon_punch_l' | 'icon_punch_m' | 'key-d' | 'key-dl' | 'key-dr' | 'key-l' | 'key-nutral' | 'key-or' | 'key-plus' | 'key-r' | 'key-u' | 'key-ul' | 'key-ur'