# TTM-frontend
This is an interactive map UI for displaying travel time matrices.

See the [backend](https://github.com/DigitalGeographyLab/travel-time-matrix-visualisation-backend)
for serving the data.


## Technology
- Built on Vite, React and Typescript
- Mapping is done with react-map-gl and maplibre
- Axios for http requests


## Development
The frontend will be available at http://localhost:5173.

### Containerized
To start the frontend run:
```console
docker compose up
```
This assumes you are serving travel time matrix geojson data on http://localhost:8080/.
See `dev.Dockerfile` for changing the url to fetch data from.

### Non-containerized
Install everything with:
```console
npm install
```
Set the env var `VITE_BACKEND_URL` to reflect where you are serving the data from.

Start in development mode:
```console
npm run dev -- --host
```

## Deploying to rahti
The command line tool `oc` is required for interacting with rahti.

After authenticating you can create a deployment with:
```console
oc create -f manifest.yml
```

And delete it with:
```console
oc delete all --selector app=ttm
```
