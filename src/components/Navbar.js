import React from 'react';
import logo from '../assets/logo2.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container-fluid'>
        <img src={logo} alt='' className='navimg' />
        <h3 className='text-dark nubes'>Nubes App</h3>
      </div>
    </div>
  )
}

export default Navbar

