import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <div className="project-container">
        <div className="calculator">
          <h1><Link to='./calculator'>Calculator</Link></h1>
          <p>Calculator Info</p>
        </div>
        <div className="todo-list"><h1>Todo-List</h1>
          <p>Tdo-List Info</p></div>
        <div className="weather-app"><h1>Weather App</h1>
          <p>Weather App Info Info</p></div>
      </div>
    </div>
  )
}
