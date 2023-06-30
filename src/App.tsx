// import './App.css'
import { useState, useEffect } from 'react'
import formatName from './utils/formatName'
import matrixService from './servives/matrices'

import Map from './components/Map'
import Button from './components/Button'

const App = () => {

  const [year, setYear] = useState('2018')
  const [travelMode, setTravelMode] = useState('pt')
  const [variation, setVariation] = useState('r_t')
  const [ykrId, setYkrId] = useState('5827486')
  const [matrixData, setMatrixData] = useState(null)

  let name = formatName(year, travelMode, variation, ykrId)
  
  useEffect(() => {
    matrixService.getMatrix(name).then(matrixData =>
      setMatrixData(matrixData)
    )
    console.log('effect hook matrix')
  }, [year, travelMode, variation, ykrId])


  const [baseGrid, setBaseGrid] = useState(null)
  useEffect(() => {
    matrixService.getBaseGrid().then(baseGrid =>
      setBaseGrid(baseGrid)
    )
    console.log('effect hook basegrid')
  }, [])



  const testFetch = () => {
    setTravelMode('bike')
    setVariation('s_t')
    console.log('name:', name)
  }

  return (
    <>
      <Button onClick={testFetch} text={'test'}/>
      <Map
        matrixData={matrixData}
        baseGrid={baseGrid}
        setYkrId={setYkrId}
      />
    </>
  )
}

export default App
