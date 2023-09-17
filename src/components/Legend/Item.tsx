const Item = ({color, label}: any) => {

  return (
    <div className="legend-item">
      <span style={{background:color}}></span>{label}
    </div>
  )
}

export default Item
