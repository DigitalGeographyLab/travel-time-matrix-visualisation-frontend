import Button from './Button'

const TopBar = ({
  setTravelMode,
  setVariation,
  setYear
}: any) => {

  const makeTravelModeHandler = (mode: string, variation: string) => {
    const handleTravelModeChange = () => {
      setTravelMode(mode)
      setVariation(variation)
    }
    return handleTravelModeChange
  }

  const makeYearHandler = (year: string) => {
    const handleYearChange = () => {
      setYear(year)
    }
    return handleYearChange
  }

  return (
    <div style={{ }}>
      <Button onClick={makeTravelModeHandler('walk', 'avg')} text={'walk'}/>
      <Button onClick={makeTravelModeHandler('bike', 'slo')} text={'bike, slow'}/>
      <Button onClick={makeTravelModeHandler('bike', 'fst')} text={'bike, fast'}/>
      <Button onClick={makeTravelModeHandler('pt', 'r_walk_avg')} text={'public transport, rush'}/>
      <Button onClick={makeTravelModeHandler('pt', 'm_walk_avg')} text={'public transport, midday'}/>
      <Button onClick={makeTravelModeHandler('car', 'r')} text={'car, rush'}/>
      <Button onClick={makeTravelModeHandler('car', 'm')} text={'car, midday'}/>
      <Button onClick={makeYearHandler('2023')} text={'2023'}/>
    </div>
  )

  
}

export default TopBar
