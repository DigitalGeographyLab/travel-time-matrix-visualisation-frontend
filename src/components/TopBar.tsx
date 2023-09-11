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
      <Button onClick={makeTravelModeHandler('walk', 't')} text={'walk'}/>
      <Button onClick={makeTravelModeHandler('bike', 's_t')} text={'bike, slow'}/>
      <Button onClick={makeTravelModeHandler('bike', 'f_t')} text={'bike, fast'}/>
      <Button onClick={makeTravelModeHandler('pt', 'r_t')} text={'public transport, rush'}/>
      <Button onClick={makeTravelModeHandler('pt', 'm_t')} text={'public transport, midday'}/>
      <Button onClick={makeTravelModeHandler('car', 'r_t')} text={'car, rush'}/>
      <Button onClick={makeTravelModeHandler('car', 'm_t')} text={'car, midday'}/>
      <Button onClick={makeYearHandler('2018')} text={'2018'}/>
    </div>
  )

  
}

export default TopBar
