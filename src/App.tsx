import { useState, useEffect } from "react"
import matrixService from "./services/matrices"

import MapComponent from "./components/Map"
import ControlPanel from "./components/ControlPanel"
import Legend from "./components/Legend"

import "./App.css"

const App = () => {
  const [year, setYear] = useState("2023") // Year selection is disabled in controlPanel currently
  const [travelMode, setTravelMode] = useState("pt_r_walk_avg")
  const [ykrId, setYkrId] = useState("5975371") // Each grid cell has an unique ykrid
  const [matrixData, setMatrixData] = useState(null)
  const [baseGrid, setBaseGrid] = useState(null)
  const [borders, setBorders] = useState(null)

  const formatMatrixName = (
    year: string,
    travelMode: string,
    ykrId: string,
  ) => {
    return `${year}_${travelMode}_${ykrId}`
  }

  let matrixName = formatMatrixName(year, travelMode, ykrId)

  useEffect(() => {
    matrixService
      .getMatrix(matrixName)
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
