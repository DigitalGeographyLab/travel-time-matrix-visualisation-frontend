import Option from './Option'

const DropDown = ({
  setState,
  options,
  initialSelection
}: any) => {

  return (
    <select
      className='dropdown'
      onChange={(e) => setState(e.target.value)}
      defaultValue={initialSelection}
    >
      {options.map((option: Array<string>) => <Option
        value={option[0]}
        text={option[1]}
      />)}
    </select>
  )
}

export default DropDown
