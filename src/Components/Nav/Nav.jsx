import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
function Nav() {
  return (
    <nav>
    <ul>
            <li  ><NavLink to="/home">Home</NavLink></li>
            <li ><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/designerprofile"> D Profile</NavLink></li>
            <li><NavLink to='/ShowProjects'>Show Projects</NavLink></li>
            <li><NavLink to='/portfolio'>portfolio</NavLink></li>

          
    </ul>
    </nav>
  )
}

export default Nav