import '../styles/Skills.css'
import Nav from '../components/Nav'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

import Skill from '../components/Skill'

// SKILLS DATABASE
import reactimg from '../assets/images/reactjs.png';
import jsimg from '../assets/images/js.png';
import nodeimg from '../assets/images/node.png';

const skills = [
  {
    image: reactimg,
    name: 'ReactJS',
  },
  {
    image: jsimg,
    name: 'JavaScript',
  },
  {
    image: nodeimg,
    name: 'NodeJS',
  },
]


function Skills() {
  const [typing, setTyping] = useState(true)

  return(
    <div>
      <Nav color="var(--red)"/>
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 1.25, duration: 0.5}}>
          <motion.div className="Window">
            <div className="TitleBar">
              <div className="Icons">
                <div className="Icon"></div>
                <div className="Icon"></div>
                <div className="Icon"></div>
              </div>
              <div className="Title">gisketch-cli</div>
            </div>
            <div className="Content">
              <div className="Line">
                <div className="Prompt">gisketch@dev:~$</div>
                <div className="Command">
                  {
                    typing ?
                    <TypeAnimation sequence={["",2000,"skills webdev",750,()=>{setTyping(false)}]} /> :
                    <>skills webdev</> 
                  }
                </div>
              </div>
              <div className="Showcase">
                {/* {
                  skills.map((skill, index) => {
                    return(
                      <Skill
                        image={skill.image}
                        name={skill.name}
                        key={"skills"+index}
                      />
                    )
                  })
                } */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills