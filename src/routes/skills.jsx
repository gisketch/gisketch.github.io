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
import unityimg from '../assets/images/unity3d.png';
import csharpimg from '../assets/images/csharp.png';
import photoshopimg from '../assets/images/photoshop.png';
import blenderimg from '../assets/images/blender3d.png';

const skills = [
  { 
    command: 'webdev',
    data: [
      {
        image: reactimg,
        name: 'ReactJS',
        level: 5,
        description: 'still learning',
      },
      {
        image: jsimg,
        name: 'JavaScript',
        level: 8,
        description: 'quite good'
      },
      {
        image: nodeimg,
        name: 'NodeJS',
        level: 4,
        description: 'working on it'
      },
    ]
  },
  { 
    command: 'gamedev',
    data: [
      {
        image: unityimg,
        name: 'Unity 3D',
        level: 9,
        description: 'really good',
      },
      {
        image: csharpimg,
        name: 'C#',
        level: 6,
        description: 'quite good'
      },
    ]
  },
  { 
    command: 'art',
    data: [
      {
        image: photoshopimg,
        name: 'Photoshop',
        level: 10,
        description: 'expert',
      },
      {
        image: blenderimg,
        name: 'Blender 3D',
        level: 5,
        description: 'still learning'
      },
    ]
  },
]

function SkillsMap(skills) {
  return(
    skills.map((skill, index) => {
      return(
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 0 + (index*0.125), duration: 0.5,}}>
          <Skill
            image={skill.image}
            name={skill.name}
            level={skill.level}
            description={skill.description}
            key={"skill-"+index}
          />
        </motion.div>
      )
    })
  )
}

function Skills() {
  const [typing, setTyping] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [skillsState, setSkillsState] = useState(0);

  return(
    <div>
      <Nav color="var(--red)"/>
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 1.25, duration: 0.5}}
          onAnimationComplete={() => {
            setIsReady(true)
          }}
          onClick={
            () => {
              if(skillsState < skills.length-1) {
                setSkillsState(skillsState+1)
                setTyping(true)
              }
            }
          }>
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
                  {
                    isReady ? 
                    <div className="Command">
                      {
                        typing ?
                        <TypeAnimation sequence={[`skills ${skills[skillsState].command}`,750,()=>{setTyping(false)}]} /> :
                        <>skills {skills[skillsState].command}</> 
                      }
                    </div> :
                  null
                  }
                </div>

                <div className="Showcase">
                  { typing ? null : SkillsMap(skills[skillsState].data) }
                </div>

              </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills