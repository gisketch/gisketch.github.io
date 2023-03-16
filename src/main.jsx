import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Root from "./routes/root";
import About from "./routes/about";
import Skills from "./routes/skills";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
