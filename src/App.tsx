import { useState, useEffect } from 'react'
import formatName from './utils/formatName'
import matrixService from './servives/matrices'

import MapComponent from './components/Map'
import MenuBar from './components/MenuBar'

const App = () => {

  const [year, setYear] = useState('2023')
  const [travelMode, setTravelMode] = useState('pt_r_walk_avg')
  const [ykrId, setYkrId] = useState('5975371')
  const [matrixData, setMatrixData] = useState(null)
  const [baseGrid, setBaseGrid] = useState(null)

  let name = formatName(year, travelMode, ykrId)
  
  useEffect(() => {
    matrixService.getMatrix(name).then(matrixData =>
      setMatrixData(matrixData)
    )
  }, [year, travelMode, ykrId])

  useEffect(() => {
    matrixService.getBaseGrid().then(baseGrid =>
      setBaseGrid(baseGrid)
    )
  }, [])

  const travelModeButtons = [
    ['walk_avg', 'walk'],
    ['bike_slo', 'bike, slow'],
    ['bike_fst', 'bike, fast'],
    ['pt_r_walk_avg', 'public transport, rush'],
    ['pt_m_walk_avg', 'public transport, midday'],
    ['car_r', 'car, rush'],
  ]
  const yearButtons = [
    ['2023', '2023'],
  ]

  return (
    <>
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
