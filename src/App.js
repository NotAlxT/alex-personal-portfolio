import React from 'react'
import { ReactDOM } from 'react'
import { Router, Routes, Route } from 'react'
import Home from './components/home/home'
import Resume from './components/resume/resume'

export default function App() {
  return (
    <>
    <Router />
      <Routes />
        <Route to='/' element={<Home />} />
        <Route to='/resume' element={<Resume />} /> 
      <Routes />
    <Router />
    </>
  )
}
