import { useState, useEffect } from 'react'
import formatName from './utils/formatName'
import matrixService from './servives/matrices'

import Map from './components/Map'
import TopBar from './components/TopBar'

const App = () => {

  const [year, setYear] = useState('2018')
  const [travelMode, setTravelMode] = useState('pt')
  const [variation, setVariation] = useState('r_t')
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
      <Map
        matrixData={matrixData}
        baseGrid={baseGrid}
        setYkrId={setYkrId}
      />
    </>
  )
}

export default App
