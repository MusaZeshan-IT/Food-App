import React from 'react'

function MenuItem({name, image, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1 className='md:text-3xl text-2xl mt-4'>{name}</h1>
        <p className='md:text-xl text-lg mt-[10px]'>${price}</p>
    </div>
  )
}

export default MenuItem