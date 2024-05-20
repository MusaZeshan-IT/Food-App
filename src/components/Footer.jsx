import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-linkedin'></i>
        </div>
        <p>&copy; 2021 musapizza.com</p>
    </div>
  )
}

export default Footer