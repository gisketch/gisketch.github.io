import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Root from "./routes/root";
import About from "./routes/about";

import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
