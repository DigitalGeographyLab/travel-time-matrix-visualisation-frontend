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

  return (
    <div>
      <Button onClick={makeTravelModeHandler('bike', 's_t')} text={'bike'}/>
      <Button onClick={makeTravelModeHandler('pt', 'r_t')} text={'public transport'}/>
      <Button onClick={makeTravelModeHandler('car', 'r_t')} text={'car'}/>
    </div>
  )

  
}

export default TopBar
