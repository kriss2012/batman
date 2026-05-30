import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">THE DARK <span>KNIGHT</span></div>

      <ul className="nav-links">
        <li><a href="#gotham">Gotham</a></li>
        <li><a href="#bruce">Bruce Wayne</a></li>
        <li><a href="#rogues">The Rogues</a></li>
        <li><a href="#mission">The Mission</a></li>
      </ul>
    </nav>
  )
}

export default Navbar