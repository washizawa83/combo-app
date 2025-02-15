export type GaugeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6

type Props = {
  gauge: GaugeLevel
  editable: boolean
  handleSelectGauge: React.Dispatch<React.SetStateAction<GaugeLevel>>
}

export const DriveGauge = ({ gauge, editable, handleSelectGauge }: Props) => {
  const selectGauge = (index: number) => {
    if (!editable) return
    const level = (index + 1) as GaugeLevel
    handleSelectGauge((currentGauge) => {
      if (currentGauge === level) return 0
      return level
    })
  }
  return (
    <div>
      {[...Array(6)].map((_, i) => (
        <button
          key={i}
          className={`xl:w-12 w-10 xl:h-8 h-7 mr-2 border ${gauge >= i + 1 ? 'bg-accentGreen/[.4] border-accentGreen' : 'bg-accentEmpty border-accentEmpty'}`}
          onClick={() => selectGauge(i)}
        ></button>
      ))}
    </div>
  )
}
