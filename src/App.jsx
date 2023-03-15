import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion"

function App() {

  return (
    <div className="App">
      <motion.div
        className="Nav"
        initial={
          {
            opacity: 0,
          }
        }
        animate={
          {
            opacity: 1,
          }
        }
        transition={
          {
            duration: 0.75,
          }
        }>
        <motion.h2>
            GISKETCH 2023
        </motion.h2>
        <div>
          <a>home</a>
          <a>about</a>
          <a>skills</a>
          <a>projects</a>
          <a>contact</a>
        </div>
        <motion.div
          className="BorderNav"
          initial={
            {
              width: 0,
            }
          }
          animate={
            {
              width: "97.5%",
            }
          }
          transition={
            {
              duration: 0.5,
              delay: 0.75,
            }
          }>
        </motion.div>
      </motion.div>
      <div className="Home">

      </div>
    </div>
  )
}

export default App
