import DropDown from "./DropDown"
import "./style.css"

const ControlPanel = ({ setTravelMode, setYear }: any) => {
  const showYearSelect = false

  const travelModeOptions = [
    ["walk_avg", "walk, average"],
    ["walk_slo", "walk, slow"],
    ["bike_avg", "bike, average"],
    ["bike_slo", "bike, slow"],
    ["bike_fst", "bike, fast"],
    ["pt_r_walk_avg", "public transport, rush hour"],
    ["pt_m_walk_avg", "public transport, midday"],
    ["pt_n_walk_avg", "public transport, night"],
    ["car_r", "car, rush hour"],
    ["car_m", "car, midday"],
    ["car_n", "car, night"],
  ]
  const yearOptions = [["2023", "2023"]]

  return (
    <div className="control-panel">
      <DropDown
        setState={setTravelMode}
        options={travelModeOptions}
        initialSelection={"pt_r_walk_avg"}
        label={"Travel mode: "}
      />
      {showYearSelect && (
        <DropDown
          setState={setYear}
          options={yearOptions}
          initiallyActive={"2023"}
          label={"Year: "}
        />
      )}
    </div>
  )
}

export default ControlPanel
