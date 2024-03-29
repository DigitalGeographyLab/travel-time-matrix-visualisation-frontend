import { useState, useRef } from "react"
import Map, {
  Source,
  Layer,
  FillLayer,
  LineLayer,
  NavigationControl,
  ScaleControl,
  Marker,
} from "react-map-gl/maplibre"
import Tooltip from "./Tooltip"

import "./style.css"

const MapComponent = ({ matrixData, baseGrid, borders, setYkrId }: any) => {
  const [hoverMode, _setHoverMode] = useState(true)
  const [hoverInfo, setHoverInfo] = useState<{
    time: number
    x: number
    y: number
  } | null>(null)
  const [markerVisibility, setMarkerVisibility] = useState(false)
  const [marker, setMarker] = useState({
    latitude: 60.25,
    longitude: 24.88,
  })

  // this updates properly in handlers
  const hoverModeRef = useRef(hoverMode)
  const setHoverMode = (mode: boolean) => {
    hoverModeRef.current = mode
    _setHoverMode(mode)
  }

  const INITIAL_VIEW_STATE = {
    longitude: 24.88,
    latitude: 60.25,
    zoom: 10,
    pitch: 0,
    bearing: 0,
  }

  const handleHover = (event: any) => {
    const {
      features,
      point: { x, y },
    } = event
    if (features.length > 0 && hoverModeRef.current === true) {
      setHoverInfo(null)
      setYkrId(features[0].properties.YKR_ID)
    }
    if (hoverModeRef.current === false) {
      if (features.length > 1) {
        const hoveredFeature = features[1]
        setHoverInfo({ time: hoveredFeature.properties.t, x: x, y: y })
      } else {
        setHoverInfo(null)
      }
    }
  }
  const handleClick = (event: any) => {
    // detect clicks on grid
    if (event.features.length > 0) {
      setYkrId(event.features[0].properties.YKR_ID)
      setHoverMode(!hoverMode)
      if (hoverModeRef.current === false) {
        setMarkerVisibility(true)
        setMarker({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat,
        })
      } else {
        setMarkerVisibility(false)
      }
    }
  }

  const travelTimeLayer: FillLayer = {
    id: "travelTimeLayer",
    source: "travelTimeLayer",
    type: "fill",
    paint: {
      "fill-color": [
        "match",
        ["get", "t"],
        15,
        "#FFE841",
        30,
        "#A69D76",
        45,
        "#555C6C",
        60,
        "#001A4B",
        "black",
      ],
      "fill-outline-color": "#00000000",
      "fill-opacity": 0.25,
      "fill-antialias": false,
    },
  }
  const gridLayer: FillLayer = {
    id: "gridLayer",
    source: "gridLayer",
    type: "fill",
    paint: {
      "fill-color": "#000000",
      "fill-opacity": 0,
    },
  }
  const outlineLayer: LineLayer = {
    id: "outlineLayer",
    source: "outlineLayer",
    type: "line",
    paint: {
      "line-width": 2,
      "line-color": "#697B89",
      "line-opacity": 0.7,
    },
  }

  return (
    <div style={{}}>
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        onMouseMove={(e) => handleHover(e)}
        onClick={(e) => handleClick(e)}
        interactiveLayerIds={["gridLayer", "travelTimeLayer"]}
        doubleClickZoom={false}
      >
        {markerVisibility && (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            anchor="center"
            color="#555C6C"
          ></Marker>
        )}
        <ScaleControl />
        <NavigationControl />
        <Source id="travelTimeLayer" type="geojson" data={matrixData}>
          <Layer {...travelTimeLayer} />
        </Source>
        <Source id="gridLayer" type="geojson" data={baseGrid}>
          <Layer {...gridLayer} />
        </Source>
        <Source id="outlineLayer" type="geojson" data={borders}>
          <Layer {...outlineLayer} />
        </Source>
        {!hoverModeRef.current && hoverInfo && (
          <Tooltip time={hoverInfo.time} x={hoverInfo.x} y={hoverInfo.y} />
        )}
      </Map>
    </div>
  )
}

export default MapComponent
