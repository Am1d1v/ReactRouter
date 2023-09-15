
import React from 'react'
import { NavLink } from 'react-router-dom'


const Menu = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contacts'>Contacts</NavLink>
    </nav>
  )
}

export default Menu