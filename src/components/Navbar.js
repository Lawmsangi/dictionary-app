import React from 'react'
import Logo from '../assets/logo.png'
import Share from '../assets/share.png'
import '../styles/Navbar.css'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="" />
        <h2>My Dictionary</h2>
        <img src={Share} alt="" />
    </div>
  )
}

export default Navbar