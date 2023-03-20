import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


export default function Nav() {

const [isActive, setIsActive] = useState(false)

const closeNav = () => {

  setIsActive(false);
  document.querySelector(".nav-wrapper").classList.remove("active");
}
  return (
    <div className='nav-container'>
      <input type="checkbox" id="active" checked={isActive} onChange={() => setIsActive(!isActive)}/>
        <label for="active" className="nav-menu-btn"><span></span></label>
        <label for="active" className="nav-close"></label>
        <div className="nav-wrapper">
          <ul>
            <li onClick={closeNav}><Link to='/'>Home</Link></li>
            <li onClick={closeNav}><Link to='/resume'>Resume</Link></li>
            <li onClick={closeNav}><Link to='/projects'>Projects</Link></li>
            <li onClick={closeNav}><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}
