import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    function toggleNavbar() {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'close'}>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar} type="button">
                    <i className='fa-solid fa-xl fa-bars'></i>
                </button>
            </div>
        </div>
    )
}

export default Navbar