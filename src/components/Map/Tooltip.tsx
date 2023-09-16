const Tooltip = ({ time, x, y }: {time: number, x: number, y: number}) => {
  const makeLabel = (time: number) => {
    return (`${time-15}-${time}`)
  }
  const label = makeLabel(time)
  return (
    <div className="tooltip" style={{
      position: 'absolute',
      left: x+3,
      top: y+3,
      margin: "8px",
      padding: "4px",
      background: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fontSize: '12px',
      zIndex: 9,
      pointerEvents: "none",
    }}>
      <div>Travel time: {label} minutes</div>
    </div>
  )
}

export default Tooltip
