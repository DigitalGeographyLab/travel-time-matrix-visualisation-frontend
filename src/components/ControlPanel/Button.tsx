const Button = ({ onClick, text, clicked, setClicked }: any) => {

  const color = (clicked === text) ? "green" : "black"

  const wrapOnClick = () => {
    setClicked(text)
    onClick()
  }

  return (
    <button onClick={wrapOnClick} style={{ color: color, position: 'relative', zIndex: 10 }}>
      {text}
    </button>
  )
}

export default Button
