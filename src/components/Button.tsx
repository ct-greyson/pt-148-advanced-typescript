import React, {MouseEvent} from 'react'

interface ButtonProps {
    buttonClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({buttonClick}: ButtonProps) => {
  return (
    <button onClick={buttonClick}>Click Me!</button>
  )
}

export default Button