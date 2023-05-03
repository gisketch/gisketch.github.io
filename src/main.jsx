import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Root from './routes/root'
import About from './routes/about'
import Skills from './routes/skills'
import Projects from './routes/projects'
import Contact from './routes/contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
