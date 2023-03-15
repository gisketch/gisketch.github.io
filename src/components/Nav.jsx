import { useState } from 'react'
import { motion } from "framer-motion"
import '../App.css'
import { FaBars } from 'react-icons/fa'

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
          <FaBars className="NavIcon" />
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
    )
}

export default Nav