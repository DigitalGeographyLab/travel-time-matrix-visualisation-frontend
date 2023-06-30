const Button = ({ onClick, text }: any) => {
  return (
    <button onClick={onClick} style={{ position: 'relative', zIndex: 10 }}>
      {text}
    </button>
  )
}

export default Button
