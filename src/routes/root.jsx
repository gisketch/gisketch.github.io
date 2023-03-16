import '../styles/Root.css'
import Nav from '../components/Nav'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import portrait from '../assets/images/me.png'

function Root() {
    return (
      <div className="App">
        <Nav color="var(--yellow)"/>
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
                }
                onAnimationEnd={
                  ()=>{
                    setSocialsReady(true)
                  }
                }>
                <TypeAnimation
                sequence={[
                  '//WEB DEVELOPER', 
                  2000, 
                  '//GAME DEVELOPER', 
                  2000, 
                  '//ARTIST',
                  2000,
                  () => {}
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
              </motion.div>

              <div className="Socials">
                <motion.a
                  initial={{scale:0}}
                  animate={{
                    scale:1, 
                    transition:{duration: 0.5, delay: 2}
                  }} 
                  whileHover={{
                    color: 'var(--yellow)',
                    transition:{duration: 0.25, delay: 0},
                  }}
                  href="https://github.com/gisketch/">
                  <FaGithub />
                </motion.a>
                <motion.a
                  initial={{scale:0}}
                  animate={{
                    scale:1, 
                    transition:{duration: 0.5, delay: 2.25}
                  }} 
                  whileHover={{
                    color: 'var(--cyan)',
                    transition:{duration: 0.25, delay: 0},
                  }}
                  href="https://twitter.com/gisketch">
                  <FaTwitter />
                </motion.a>
                <motion.a
                  initial={{scale:0}}
                  animate={{
                    scale:1, 
                    transition:{duration: 0.5, delay: 2.5}
                  }} 
                  whileHover={{
                    color: 'var(--purple)',
                    transition:{duration: 0.25, delay: 0},
                  }}
                  href="https://www.instagram.com/gisketch/">
                  <FaInstagram />
                </motion.a>
                <motion.a
                  initial={{scale:0}}
                  animate={{
                    scale:1, 
                    transition:{duration: 0.5, delay: 2.75}
                  }} 
                  whileHover={{
                    color: 'var(--red)',
                    transition:{duration: 0.25, delay: 0},
                  }}
                  href="https://www.youtube.com/@gisketch">
                  <FaYoutube />
                </motion.a>
              </div>
              
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
                  opacity: 0.8,
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
  
  export default Root