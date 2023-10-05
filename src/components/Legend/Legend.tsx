import Item from "./Item"
import "./style.css"

const Legend = () => {
  const items = [
    ["#FFE841", "0-15"],
    ["#A69D76", "15-30"],
    ["#555C6C", "30-45"],
    ["#001A4B", "45-60"],
  ]
  return (
    <div className="legend">
      <h4 className="legend-title">Travel time (min)</h4>
      {items.map((item: Array<string>) => (
        <Item key={item[1]} color={item[0]} label={item[1]} />
      ))}
    </div>
  )
}

export default Legend
