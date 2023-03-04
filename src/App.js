import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/home'
import Resume from './pages/resume/resume'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route to='/' element={<Home />} />
          <Route to='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  )
}
