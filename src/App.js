import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'


const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/> } />
      <Route path="/port" exact element={<Home/> } />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/> } />
      <Route path="/services" element={<Services/> } />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
    
     </BrowserRouter>

     
</div>
    
  )
}

export default App

