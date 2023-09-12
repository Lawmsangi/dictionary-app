import React from 'react'
import Logo from '../assets/logo.png'
import Share from '../assets/share.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
   const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className='navbar'>
        <Link to="/"> 
          <img src={Logo} alt="logo" onClick={refreshPage} />
        </Link>
        <h2>My Dictionary</h2>
        <img src={Share} alt="share-icon" />
    </div>
  )
}

export default Navbar