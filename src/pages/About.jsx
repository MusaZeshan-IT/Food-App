import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1 className='sm:text-5xl text-[45px] font-semibold mt-52'>ABOUT US</h1>
        <p className='md:text-lg text-base'>
          At Musa's Pizza, we are dedicated to creating the perfect pizza experience with every bite. Founded in
          2001, we combine the freshest ingredients and handcrafted techniques to bring you a menu
          that blends classic favorites with innovative flavors. Our commitment to quality, from our freshly made dough
          to our rich tomato sauce and premium toppings, ensures a delicious and memorable meal every time. Join us at
          Musa's Pizza, where passion meets pizza, and every slice is a celebration of taste.
        </p>
      </div>
    </div>
  )
}

export default About