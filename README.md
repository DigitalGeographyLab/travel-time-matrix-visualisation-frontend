# TTM-frontend
This is an interactive map UI for displaying travel time matrices.


## Technology
Currently built using Vite, React and Typescript.

Mapping is done with:
- Deck.gl for rendering layers
- react-map-gl + maplibre for basemap

Axios for http requests.


## Development
Install everything with:
```console
npm install
```
And start in development mode:
```console
npm run dev -- --host
```

The app fetches travel time matrices (preprocessed to catchment polygons in geojson format) from http://localhost:8080/.
Serve them with the [backend](https://github.com/DigitalGeographyLab/travel-time-matrix-visualisation-backend).


## Current state
- Fetch catchments by http requests
- Select catchments, trigger fetching and update the map view based on mouse location (hover)
- visualize catchments
- Choose from all travel modes
