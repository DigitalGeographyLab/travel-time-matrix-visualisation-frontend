const formatName = (
  year: string,
  travelMode: string,
  variation: string,
  ykrId: string
) => {
  return `${year}_${travelMode}_${variation}_${ykrId}`
}

export default formatName 
