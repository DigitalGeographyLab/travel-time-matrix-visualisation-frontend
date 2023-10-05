import Option from "./Option"

const DropDown = ({ setState, options, initialSelection, label }: any) => {
  return (
    <div className="label">
      {label}
      <select
        className="dropdown"
        onChange={(e) => setState(e.target.value)}
        defaultValue={initialSelection}
      >
        {options.map((option: Array<string>) => (
          <Option key={option[1]} value={option[0]} text={option[1]} />
        ))}
      </select>
    </div>
  )
}

export default DropDown
