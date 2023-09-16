import MenuBar from "./MenuBar"

const ControlPanel = ({setTravelMode, setYear}: any) => {

  const travelModeButtons = [
    ['walk_avg', 'walk'],
    ['bike_slo', 'bike, slow'],
    ['bike_fst', 'bike, fast'],
    ['pt_r_walk_avg', 'public transport, rush'],
    ['pt_m_walk_avg', 'public transport, midday'],
    ['car_r', 'car, rush'],
    ['car_m', 'car, midday'],
  ]
  const yearButtons = [
    ['2023', '2023'],
  ]

  return (
    <div>
      <MenuBar
        setState={setTravelMode}
        buttons={travelModeButtons}
        initiallyActive={'public transport, rush'}
      />
      <MenuBar
        setState={setYear}
        buttons={yearButtons}
        initiallyActive={'2023'}
      />
    </div>
  )
}

export default ControlPanel
