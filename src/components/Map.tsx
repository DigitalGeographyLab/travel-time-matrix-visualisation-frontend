import { useState, useRef, useCallback } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer } from '@deck.gl/layers/typed'
import Map, {Source, Layer, FillLayer} from 'react-map-gl/maplibre'
import { BASEMAP } from '@deck.gl/carto/typed'

// DeckGL react component
const MapComponent = ({ matrixData, setMatrixData, baseGrid, setYkrId }: any) => {

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

  // const handleHover = useCallback((event: any) => {
  //   console.log(event)
  //   console.log(event.features)
  // }, []);
  const handleHover = (event: any) => {
    if (event.features.length > 0 && hoverModeRef.current === true) {
      setYkrId(event.features[0].properties.YKR_ID)
    }
  }
  const handleClick = (event: any) => {
    console.log(event.features)
    if (event.features.length > 0) {  // detect clicks on grid
      setYkrId(event.features[0].properties.YKR_ID)
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

  const travelTimeLayer: FillLayer = {
    id: 'travelTimeLayer',
    source: 'travelTimeLayer',
    type: 'fill',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 't'],
        15,
        ['to-color', '#FFFFFF'],
        60,
        ['to-color', '#000000'],
      ],
      "fill-outline-color": "#00000000",
      'fill-opacity': 0.25
    }
  };
  const gridLayer: FillLayer = {
    id: 'gridLayer',
    source: 'gridLayer',
    type: 'fill',
    paint: {
      'fill-color': '#000000',
      'fill-opacity': 0
    }
  };

  return (
    <div style={{ }}>
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        style={{position: 'absolute', width: '100%', height: '100%'}}
        mapStyle='https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
        onMouseMove={e => handleHover(e)}
        onClick={e => handleClick(e)}
        interactiveLayerIds={['gridLayer', 'travelTimeLayer']}
      >
      <Source id='travelTimeLayer' type='geojson' data={matrixData}>
        <Layer {...travelTimeLayer} />
      </Source>
      <Source id='gridLayer' type='geojson' data={baseGrid}>
        <Layer {...gridLayer} />
      </Source>
      </Map>
    </div>
  )
}

export default MapComponent
