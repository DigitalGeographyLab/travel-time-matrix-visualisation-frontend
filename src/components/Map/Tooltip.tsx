const Tooltip = ({ time, x, y }: { time: number; x: number; y: number }) => {
  const makeLabel = (time: number) => {
    return `${time - 15}-${time}`
  }
  const label = makeLabel(time)
  return (
    <div
      className="tooltip"
      style={{
        position: "absolute",
        left: x + 10,
        top: y + 10,
      }}
    >
      <div>Travel time: {label} minutes</div>
    </div>
  )
}

export default Tooltip
