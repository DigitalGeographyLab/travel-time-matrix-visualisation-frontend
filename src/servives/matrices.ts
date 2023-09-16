import axios from 'axios'
const BASE_URL = "https://ttm-isochrones.rahtiapp.fi/geojson" // TODO

const getMatrix = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/${name}.geojson`)
  return response.data
}

const getBaseGrid = async () => {
  const response = await axios.get(`${BASE_URL}/grid.geojson`)
  return response.data
}

export default { getMatrix, getBaseGrid }
