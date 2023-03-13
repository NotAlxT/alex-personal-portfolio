import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <div>
      <input type="checkbox" id="active"/>
        <label for="active" className="nav-menu-btn"><span></span></label>
        <label for="active" className="nav-close"></label>
        <div className="nav-wrapper">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}
