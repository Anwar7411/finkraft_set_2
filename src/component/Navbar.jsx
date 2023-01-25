import React from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/"><div>Form</div></Link>
        <Link to="/grid"><div>Grid Table</div></Link>
    </div>
  )
}

export default Navbar