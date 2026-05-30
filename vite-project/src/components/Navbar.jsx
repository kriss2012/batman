import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">THE DARK <span>KNIGHT</span></div>

      <ul className="nav-links">
        <li>Gotham</li>
        <li>Bruce Wayne</li>
        <li>The Rogues</li>
        <li>The Mission</li>
      </ul>
    </nav>
  )
}

export default Navbar