import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Nav from './components/navbar/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<> <Nav /> <Outlet /> <Footer /> </>}>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
