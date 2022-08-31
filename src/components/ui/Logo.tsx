import React from 'react'

type Props = {
  width: 'sm' | 'md' | 'xl'
}

enum SIZES {
  sm = 'text-xl',
  md = 'text-2xl',
  xl = 'text-4xl'
}

const Logo = ({ width }: Props) => {
  return (
    <p
      className={`whitespace-nowrap uppercase cursor-pointer font-bold ${SIZES[width]} tracking-widest font-serif text-cyan-800 hover:brightness-125 transition-all duration-200`}
    >
      la nacion
    </p>
  )
}

export default Logo
