import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/home'
import Resume from './pages/resume/resume'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  )
}
