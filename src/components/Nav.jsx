import { useState } from 'react'
import { motion } from "framer-motion"
import '../styles/Nav.css'
import { AiOutlineClose, AiOutlineBars} from 'react-icons/ai'

const status = "Currently studying at University of Southern Mindanao as an EcE student."

const navs = [
    {
      name: "home",
      link: "#",
      color: "var(--yellow)",
    },
    {
      name: "about",
      link: "#",
      color: "var(--green)",
    },
    {
      name: "skills",
      link: "#",
      color: "var(--red)",
    },
    {
      name: "projects",
      link: "#",
      color: "var(--purple)",
    },
    {
      name: "contact",
      link: "#",
      color: "var(--blue)",
    },
  ]

function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    
    return(
    <div>
        <motion.div
            className="MobileNav"
            animate={
                {
                    x: navOpen ? 0 : "-100%",
                }
            }
            transition={
                {
                    duration: 1,
                }
            }
            >
            <motion.div
                className="MobileNavIcon"
                >
                    <AiOutlineClose onClick={()=>{setNavOpen(false)}}/>
            </motion.div>
            {navs.map((nav, index) => (
                <motion.a
                    key={index}
                    style={
                        {
                            color: nav.color,
                        }
                    }
                    whileHover={
                        {
                            scale: 1.1,
                        }
                    }
                    animate={
                        {
                            opacity: navOpen ? 1 : 0,
                            x: navOpen ? 0 : -300,
                        }
                    }
                    transition={
                        {
                            duration: 0.75,
                            delay: 0.75 + (index * 0.1),
                        }
                    }
                    >
                    {nav.name}
                </motion.a>
            ))}
            <motion.div
                className="Status"
                animate={
                    {
                        opacity: navOpen ? 1 : 0,
                    }
                }
                transition={
                    {
                        duration: 0.75,
                        delay: 1.5,
                    }
                }>
                <p>
                    ghegi44@gmail.com
                </p>
                <p style={{fontSize: '1.25rem'}}>
                    PHILIPPINES
                </p>
                <p>
                    {status}
                </p>
            </motion.div>
        </motion.div>

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
          {navs.map((nav, index) => (
            <motion.a
              key={index}
              whileHover={
                {
                  color: nav.color,
                  scale: 1.1,
                }
              }
              >
              {nav.name}
            </motion.a>
          ))}
          <AiOutlineBars className="NavIcon" onClick={()=>{setNavOpen(true)}}/>
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
    </div>
    )
}

export default Nav