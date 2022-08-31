import React from 'react'

type Props = {
  img: string
  title: string
  date: string
}

const Item = ({ img, title, date }: Props) => {
  return (
    <div className="w-full">
      <div className="cursor-pointer">
        <div className="h-[350px] md:h-[250px] lg:h-[180px] grid overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full hover:brightness-110 transition-all duration-200"
          />
        </div>
        <p className="font-bold">{title}. </p>
      </div>
      <p>{date}</p>
    </div>
  )
}

export default Item
