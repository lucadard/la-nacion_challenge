import React, { useCallback, useEffect, useState } from 'react'

import Button from '../ui/Button'
import { IconMenu } from '../assets/Icons'
import Search from '../ui/Search'
import Logo from '../ui/Logo'
import { useData } from '../context/DataContext'
import { useScrollDirection } from '../hooks/useScrollDirection'
type Props = {}

const Navbar = (props: Props) => {
  const { clientWidth } = useData()
  const scrollDir = useScrollDirection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInputActive, setIsInputActive] = useState(false)

  return (
    <div
      className={`${
        scrollDir === 'down' ? 'md:-translate-y-20' : ''
      } z-50 md:sticky top-0 bg-white w-screen transition-transform duration-200 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="py-4 flex justify-between lg:grid lg:grid-cols-3 h-20">
          <div className="hidden lg:flex gap-6">
            <button
              className="flex gap-2 items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IconMenu open={isMenuOpen} />
              <p className=" text-xs tracking-widest uppercase w-12">
                {isMenuOpen ? 'cerrar' : 'menú'}
              </p>
            </button>
            <Search
              active={isInputActive}
              toggleActive={() => setIsInputActive(!isInputActive)}
            />
          </div>
          <div
            className={`place-self-center transition-opacity ${
              isInputActive
                ? 'opacity-0 duration-100'
                : 'delay-300 duration-300'
            }`}
          >
            <Logo width={`${clientWidth > 600 ? 'xl' : 'md'}`} />
          </div>
          <div className="flex gap-6 justify-self-end col-start-3">
            <Button type="yellow">
              <span className="p-4">suscribite</span>
            </Button>
            {clientWidth >= 768 && (
              <Button type="none">
                <span className="p-4 text-blue-500 hover:text-white">
                  ingresar
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-black border-opacity-20" />
    </div>
  )
}

export default Navbar
