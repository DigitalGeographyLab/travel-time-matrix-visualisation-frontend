import axios from 'axios'
const BASE_URL = 'http://localhost:8080'  // should be handled by proxy

const getMatrix = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/${name}.geojson`)
  return response.data
}

const getBaseGrid = async () => {
  const response = await axios.get(`${BASE_URL}/grid.geojson`)
  return response.data
}

export default { getMatrix, getBaseGrid }
