import { useState, useRef } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import StaticMap from 'react-map-gl'
import { BASEMAP } from '@deck.gl/carto/typed'

// DeckGL react component
const Map = ({ matrixData, setMatrixData, baseGrid, setYkrId }: any) => {

  const [hoverMode, _setHoverMode] = useState(true)

  // this updates properly in handlers
  const hoverModeRef = useRef(hoverMode)
  const setHoverMode = (mode: boolean) => {
    hoverModeRef.current = mode
    _setHoverMode(mode)
  };

  // Viewport settings
  const INITIAL_VIEW_STATE = {
    longitude: 24.88,
    latitude: 60.25,
    zoom: 10,
    pitch: 0,
    bearing: 0
  }

  const handleHover = (f: any) => {
    if (f.object && hoverModeRef.current === true) {
      setYkrId(f.object.properties.YKR_ID)
    }
  }
  const handleClick = (event: any) => {
    if (event.layer && event.object) {  // detect clicks on grid
      setYkrId(event.object.properties.YKR_ID)
      setHoverMode(!hoverMode)
    } else {  // clear map on clicks outside area
      setMatrixData(null)
      setHoverMode(false)
    }
  }

  const COLORS = {
    60: [ 0,68,27, 80],
    45: [ 31,136,66, 80],
    30: [ 92,188,151, 80],
    15: [ 210,238,235, 80],
    75: [ 68, 1, 84, 80],
  } as any

  const getFillColor = (feature: any) => {
    return COLORS[feature.properties.t]
  }
  const matrixLayer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: matrixData,
    pickable: false,
    stroked: false,
    getFillColor: f => getFillColor(f)
  })

  const baseGridLayer = new GeoJsonLayer({
    id: 'base-grid',
    data: baseGrid,
    pickable: true,
    stroked: false,
    getFillColor: [0, 0, 0, 0],
    // visible: false,
    onHover: f => handleHover(f),
  })

  const layers = [baseGridLayer, matrixLayer]

  return (
    <div style={{ }}>
      <DeckGL
        // parameters={{
        //   blend: true,
        //   polygonOffsetFill: false,
        //   depthTest: false,
        // }}
        onClick={event => handleClick(event)}
        initialViewState={INITIAL_VIEW_STATE}
        controller={{doubleClickZoom: false}}
        layers={layers}>
        <StaticMap mapStyle={BASEMAP.POSITRON} />
      </DeckGL>
    </div>
  )
}

export default Map
