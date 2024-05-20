import React from 'react'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'
import MenuItem from '../components/MenuItem'

function Menu() {
  return (
    <div className='menu mb-10'>
      <h1 className='md:text-6xl text-5xl my-10 font-semibold'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((item, key) => {
          return (
            <MenuItem key={key} name={item.name} image={item.image} price={item.price}/>
          )
        })}
      </div>
    </div>
  )
}

export default Menu