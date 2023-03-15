import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

import portrait from './assets/images/me.png'


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
          <div className="Name">
            <motion.h1
              initial={
                {
                  opacity: 0,
                  x: -100,
                }
              }
              animate={
                {
                  opacity: 1,
                  x: 0,
                }
              }
              transition={
                {
                  duration: 0.5,
                  delay: 1.5,
                }
              }>
              Ghegi<br />
              Jimenez
            </motion.h1>
            <motion.div
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
                  duration: 0.5,
                  delay: 1.75,
                }
              }>
              <TypeAnimation
              sequence={[
                'WEB DEVELOPER', 
                2000, 
                'GAME DEVELOPER', 
                2000, 
                'ARTIST',
                2000,
                () => {}
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
            </motion.div>
            
          </div>
          <motion.img 
            initial={
              {
                opacity: 0,
                y: 150,
              }
            }
            animate={
              {
                opacity: 1,
                y: 0,
              }
            }
            transition={
              {
                duration: 0.5,
                delay: 2,
              }
            }
            className="Portrait" 
            src={portrait} 
            alt="Me in ASCII" />
      </div>
    </div>
  )
}

export default App
