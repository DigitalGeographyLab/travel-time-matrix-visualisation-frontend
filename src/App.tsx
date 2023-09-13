import { useState, useEffect } from 'react'
import formatName from './utils/formatName'
import matrixService from './servives/matrices'

import MapComponent from './components/Map'
import TopBar from './components/TopBar'

const App = () => {

  const [year, setYear] = useState('2023')
  const [travelMode, setTravelMode] = useState('pt')
  const [variation, setVariation] = useState('r_walk_avg')
  const [ykrId, setYkrId] = useState('5975371')
  const [matrixData, setMatrixData] = useState(null)
  const [baseGrid, setBaseGrid] = useState(null)

  let name = formatName(year, travelMode, variation, ykrId)
  
  useEffect(() => {
    matrixService.getMatrix(name).then(matrixData =>
      setMatrixData(matrixData)
    )
  }, [year, travelMode, variation, ykrId])

  useEffect(() => {
    matrixService.getBaseGrid().then(baseGrid =>
      setBaseGrid(baseGrid)
    )
  }, [])

  return (
    <>
      <TopBar
        setTravelMode={setTravelMode}
        setVariation={setVariation}
        setYear={setYear}
      />
      <MapComponent
        matrixData={matrixData}
        setMatrixData={setMatrixData}
        baseGrid={baseGrid}
        setYkrId={setYkrId}
      />
    </>
  )
}

export default App
