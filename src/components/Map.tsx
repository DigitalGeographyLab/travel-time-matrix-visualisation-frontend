import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import StaticMap from 'react-map-gl'
import { BASEMAP } from '@deck.gl/carto/typed'

// DeckGL react component
const Map = ({ matrixData, baseGrid, setYkrId }: any) => {

  // Viewport settings
  const INITIAL_VIEW_STATE = {
    longitude: 24.93,
    latitude: 60.29,
    zoom: 10,
    pitch: 0,
    bearing: 0
  }

  const handleHover = (f: any) => {
    if (f.object) {
      setYkrId(f.object.properties.YKR_ID)
    }
  }
  const COLORS = {
    15: [253, 231, 37, 255],
    30: [53, 183, 121, 255],
    45: [38, 130, 142, 255],
    60: [62, 74, 137, 255],
    75: [68, 1, 84, 255],
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
    getFillColor: [0, 0, 0, 30],
    // visible: false,
    onHover: f => handleHover(f)
  })

  const layers = [baseGridLayer, matrixLayer]

  return (
    <div style={{ }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}>
          <StaticMap mapStyle={BASEMAP.POSITRON} />
      </DeckGL>
    </div>
  )
}

export default Map
