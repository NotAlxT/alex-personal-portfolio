import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'

export default function Projects() {
  return (
    <div>
      <div className="project-container">
        <Link className="calculator"to='./calculator'>
          <div >
            <h1>Calculator</h1>
            <p>Calculator Info</p>
          </div>
        </Link>
        <Link className="todo-list"to='./todo-list'>
          <div >
            <h1>Todo-List</h1>
            <p>Todo-List Info</p>
          </div>
        </Link>
        <Link className="weather-app"to='./weather-app'>
          <div >
            <h1>Weather</h1>
            <p>Weather Info</p>
          </div>
        </Link>
        <Link className="clock"to='./clock-timer'>
          <div >
            <h1>Clock</h1>
            <p>Clock Info</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
