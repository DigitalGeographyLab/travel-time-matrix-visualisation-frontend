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
    15: [255, 255, 255],
    30: [150, 150, 150],
    45: [75, 75, 75],
    60: [40, 40, 40],
    75: [20, 20, 20],
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
          <StaticMap mapStyle={BASEMAP.DARK_MATTER} />
      </DeckGL>
    </div>
  )
}

export default Map
