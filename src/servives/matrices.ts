import axios from 'axios'
const BASE_URL = 'http://localhost:8080'  // should be handled by proxy

const getMatrix = async (name: string) => {
  console.log('fetching matrix')
  const response = await axios.get(`${BASE_URL}/${name}.geojson`)
  console.log('fetched matrix:', response.data)
  return response.data
}

const getBaseGrid = async () => {
  console.log('fetching base grid')
  const response = await axios.get(`${BASE_URL}/grid.geojson`)
  console.log('fetched base grid:', response.data)
  return response.data
}

export default { getMatrix, getBaseGrid }
