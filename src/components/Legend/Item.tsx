const Item = ({color, label}: any) => {

  return (
    <div className="legend-item">
      <span style={{background:color, opacity: 0.5}}></span>{label}
    </div>
  )
}

export default Item
