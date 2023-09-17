import DropDown from "./DropDown"
import "./style.css"

const ControlPanel = ({setTravelMode, setYear}: any) => {

  const travelModeOptions = [
    ['walk_avg', 'walk'],
    ['bike_slo', 'bike, slow'],
    ['bike_fst', 'bike, fast'],
    ['pt_r_walk_avg', 'public transport, rush'],
    ['pt_m_walk_avg', 'public transport, midday'],
    ['car_r', 'car, rush'],
    ['car_m', 'car, midday'],
  ]
  const yearOptions = [
    ['2023', '2023'],
  ]

  return (
    <div className="control-panel">
      <DropDown
        setState={setTravelMode}
        options={travelModeOptions}
        initialSelection={'pt_r_walk_avg'}
      />
      <DropDown
        setState={setYear}
        options={yearOptions}
        initiallyActive={'2023'}
      />
    </div>
  )
}

export default ControlPanel
