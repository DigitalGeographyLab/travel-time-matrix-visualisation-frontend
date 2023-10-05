import { useState, useEffect } from "react"
import formatName from "./utils/formatName"
import matrixService from "./services/matrices"

import MapComponent from "./components/Map"
import ControlPanel from "./components/ControlPanel"
import Legend from "./components/Legend"

import "./App.css"

const App = () => {
  const [year, setYear] = useState("2023")
  const [travelMode, setTravelMode] = useState("pt_r_walk_avg")
  const [ykrId, setYkrId] = useState("5975371")
  const [matrixData, setMatrixData] = useState(null)
  const [baseGrid, setBaseGrid] = useState(null)
  const [borders, setBorders] = useState(null)

  let name = formatName(year, travelMode, ykrId)

  useEffect(() => {
    matrixService
      .getMatrix(name)
      .then((matrixData) => setMatrixData(matrixData))
  }, [year, travelMode, ykrId])

  useEffect(() => {
    matrixService.getBaseGrid().then((baseGrid) => setBaseGrid(baseGrid))
    matrixService.getBorders().then((borders) => setBorders(borders))
  }, [])

  return (
    <div>
      <ControlPanel setTravelMode={setTravelMode} setYear={setYear} />
      <MapComponent
        matrixData={matrixData}
        setMatrixData={setMatrixData}
        baseGrid={baseGrid}
        borders={borders}
        setYkrId={setYkrId}
      />
      <Legend />
    </div>
  )
}

export default App
