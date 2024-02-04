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
The development container is `dev.Dockerfile`.

To start the frontend run:

```console
docker compose up
```

This starts the development container
with the necessary ports and volumes setup to access the frontend with your browser
and provide hot reload on any changes to the code.
The default assumption is
that you are serving travel time matrix geojson data on http://localhost:8080/.
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

## Building and deploying for production
A separate container image is used
for building and serving the production build of the app (`Dockerfile`).

The production image is built and published automatically with github actions.
It is hosted on github container registry and used by the deployment.

## Deploying to rahti
The kubernetes configuration is in `manifest.yml`.
It defines:
- A Deployment that creates and runs a ReplicaSet of server pods
(each serving the production build of the application)
- A Service for exposing the deployment network
- A Route for routing traffic from the internet to the Service

The command line tool `oc` is required for interacting with rahti.

After authenticating you can create a deployment with:

```console
oc create -f manifest.yml
```

And delete it with:

```console
oc delete all --selector app=ttm
```
