import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Nav.css'
import { AiOutlineClose, AiOutlineBars } from 'react-icons/ai'

const status =
  'Currently studying at University of Southern Mindanao as an EcE student.'

const navs = [
  {
    name: 'home',
    link: '/',
    color: 'var(--yellow)',
  },
  {
    name: 'about',
    link: '/about',
    color: 'var(--green)',
  },
  {
    name: 'skills',
    link: '/skills',
    color: 'var(--red)',
  },
  {
    name: 'projects',
    link: '/projects',
    color: 'var(--purple)',
  },
  {
    name: 'contact',
    link: '/contact',
    color: 'var(--blue)',
  },
]

function Nav(props) {
  const [navOpen, setNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="MobileNav"
          initial={{
            x: '-100%',
          }}
          animate={{
            x: navOpen ? 0 : '-100%',
          }}
          transition={{
            duration: 1,
          }}
          exit={{
            x: '-100%',
          }}
        >
          <motion.div className="MobileNavIcon">
            <AiOutlineClose
              onClick={() => {
                setNavOpen(false)
              }}
            />
          </motion.div>
          {navs.map((nav, index) => (
            <motion.a
              href={nav.link}
              key={'nav-' + index}
              style={{
                color: nav.color,
              }}
              animate={{
                opacity: navOpen ? 1 : 0,
                x: navOpen ? 0 : -300,
              }}
              transition={{
                duration: 0.75,
                delay: 0.75 + index * 0.1,
              }}
            >
              {nav.name}
            </motion.a>
          ))}
          <motion.div
            className="Status"
            animate={{
              opacity: navOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.75,
              delay: 1.5,
            }}
          >
            <p>dev@gisketch.com</p>
            <p style={{ fontSize: '1.25rem' }}>PHILIPPINES</p>
            <p>{status}</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="Nav"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <motion.h2 style={{ color: props.color }}>GISKETCH 2023</motion.h2>
          <div>
            {navs.map((nav, index) => (
              <motion.a
                href={nav.link}
                key={'navMob-' + index}
                whileHover={{
                  color: nav.color,
                  scale: 1.1,
                  textShadow: `0px 0px 2px #ffffffaa}`,
                }}
              >
                {nav.name}
              </motion.a>
            ))}
            <AiOutlineBars
              className="NavIcon"
              onClick={() => {
                setNavOpen(true)
              }}
            />
          </div>
          <motion.div
            className="BorderNav"
            initial={{
              width: 0,
            }}
            animate={{
              width: '97.5%',
            }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Nav
