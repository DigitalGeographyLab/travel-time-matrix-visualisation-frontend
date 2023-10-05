const Button = ({ onClick, text, clicked, setClicked }: any) => {
  const color = clicked === text ? "green" : "black"

  const wrapOnClick = () => {
    setClicked(text)
    onClick()
  }

  return (
    <button onClick={wrapOnClick} style={{ color: color }}>
      {text}
    </button>
  )
}

export default Button
