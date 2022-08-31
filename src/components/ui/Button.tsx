import React, { ReactElement } from 'react'

type Props = {
  type?: 'none' | 'yellow' | 'blue'
  href?: string
  children: ReactElement
}

enum STYLES {
  yellow = 'bg-yellow-200',
  blue = 'bg-blue-500 border-blue-500 hover:brightness-110',
  none = 'bg-transparent border-blue-500 hover:bg-blue-500'
}

const Button = ({ type = 'none', children }: Props) => {
  return (
    <button
      className={`h-full border-2 rounded-sm ${STYLES[type]} transition-all duration-100`}
    >
      <p className="uppercase tracking-wider">{children}</p>
    </button>
  )
}

export default Button
