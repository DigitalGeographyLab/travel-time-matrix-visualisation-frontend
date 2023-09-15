import { useState } from 'react'
import Button from './Button'

const MenuBar = ({
  setState,
  buttons,
  initiallyActive
}: any) => {
  const [clickedButton, setClickedButton] = useState<string>(initiallyActive)

  return (
    <div style={{ }}>
      {buttons.map((button: Array<string>)=> <Button
        key={button[1]}
        onClick={() => setState(button[0])}
        text={button[1]}
        clicked={clickedButton}
        setClicked={setClickedButton}/>)}
    </div>
  )
}

export default MenuBar
