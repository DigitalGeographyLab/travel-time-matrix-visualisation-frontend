/// app.js
import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import StaticMap from 'react-map-gl'
import { BASEMAP } from '@deck.gl/carto/typed'

// DeckGL react component
const Map = ({ matrixData, baseGrid }: any) => {

  // Viewport settings
  const INITIAL_VIEW_STATE = {
    longitude: 24.93,
    latitude: 60.29,
    zoom: 10,
    pitch: 0,
    bearing: 0
  }

  const matrixLayer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: matrixData,
    stroked: false,
    getFillColor: (f: any) => {
      // console.log(f)
      // console.log(f.properties.t)
      if (f.properties.t == 15) {
        return [255, 255, 255]
      }
      else if (f.properties.t == 30) {
        return [200, 200, 200]
      }
      else if (f.properties.t == 45) {
        return [150, 150, 150]
      }
      else if (f.properties.t == 60) {
        return [100, 100, 100]
      }
      return [50, 50, 50]
    },
  })

  const baseGridLayer = new GeoJsonLayer({
    id: 'base-grid',
    data: baseGrid,
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
