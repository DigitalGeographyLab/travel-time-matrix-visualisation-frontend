import axios from "axios"
const BASE_URL = import.meta.env.VITE_BACKEND_URL // TODO

const getMatrix = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/${name}.geojson`)
  return response.data
}

const getBaseGrid = async () => {
  const response = await axios.get(`${BASE_URL}/grid.geojson`)
  return response.data
}

const getOutline = async () => {
  const response = await axios.get(`${BASE_URL}/grid_outline.geojson`)
  return response.data
}

const getBorders = async () => {
  const response = await axios.get(`${BASE_URL}/municipalities.geojson`)
  return response.data
}

export default { getMatrix, getBaseGrid, getBorders, getOutline }
