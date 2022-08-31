import React from 'react'
import { useData } from '../context/DataContext'

import Logo from '../ui/Logo'

const Footer = () => {
  const { clientWidth } = useData()
  return (
    <div className="lg:flex flex-col gap-3 lg:text-sm w-full mb-16 text-xs">
      <div className="grid grid-rows-3 lg:place-content-center gap-5 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-0 mb-5 lg:mb-0">
        <div className="row-start-2 lg:row-start-auto flex gap-6 justify-center lg:justify-start">
          <a href="" className="grid place-content-center h-10 w-10">
            F
          </a>
          <a href="" className="grid place-content-center h-10 w-10">
            T
          </a>
          <a href="" className="grid place-content-center h-10 w-10">
            I
          </a>
          <a href="" className="grid place-content-center h-10 w-10">
            R
          </a>
        </div>
        <div className="row-start-1 lg:row-start-auto flex flex-col items-center">
          <Logo width="md" />
          {clientWidth < 1024 && <hr className='w-full'/>}
        </div>
        <div className="row-start-3 justify-center lg:row-start-auto flex lg:justify-self-end items-center gap-6">
          <img
            src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
            alt=""
            className="hover:brightness-125 duration-200 transition-all cursor-pointer"
            style={{ height: '30px' }}
          />
          <img
            src="https://cmsphoto.ww-cdn.com/superstatic/81328/art/grande/17360379-21870473.jpg?v=1506622198.1568115&force_webp=1"
            alt=""
            className="hover:brightness-125 duration-200 transition-all cursor-pointer"
            style={{ height: '30px' }}
          />
        </div>
      </div>
      {clientWidth >= 1024 && <hr />}
      <div className="hidden lg:flex justify-between text-blue-600">
        <div className="flex gap-6 ">
          <a href="">Mapa del sitio</a>
          <a href="">Ayuda</a>
          <a href="">Términos y condiciones</a>
          <a href="">Cómo anunciar?</a>
          <a href="">Suscribirse al diario impreso</a>
        </div>
        <div className="flex gap-6">
          <span className="text-black">Protegido por re CAPTCHA:</span>
          <a href="">Condiciones</a>
          <a href="">Privacidad</a>
        </div>
      </div>
      <div className="flex items-center gap-5 flex-col lg:items-start lg:gap-0 lg:flex-row justify-between">
        <p>
          Copyrigth {new Date().getFullYear()} SA LA NACION | Todos los derechos
          reservados
        </p>
        <div className="flex items-top gap-3">
          <img
            src="https://static.glanacion.com/v2/ln/img/gda.jpg"
            alt=""
            style={{ height: '21px' }}
          />
          <p>Miembro de GDA. Grupo de Diarios América</p>
          <img
            src="https://static.glanacion.com/v2/ln/img/data.jpg"
            alt=""
            className="hover:brightness-105 duration-200 transition-all cursor-pointer"
            style={{ width: '30px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
