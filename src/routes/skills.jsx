import '../styles/Skills.css'
import Nav from '../components/Nav'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

import Skill from '../components/Skill'

// SKILLS DATABASE
import reactimg from '../assets/images/reactjs.png'
import jsimg from '../assets/images/js.png'
import nodeimg from '../assets/images/node.png'
import unityimg from '../assets/images/unity3d.png'
import csharpimg from '../assets/images/csharp.png'
import photoshopimg from '../assets/images/photoshop.png'
import blenderimg from '../assets/images/blender3d.png'
import mcmimg from '../assets/images/mcm.png'
import datathonimg from '../assets/images/datathon.png'
import arduinoimg from '../assets/images/arduino.png'
import pythonimg from '../assets/images/python.png'

const skills = [
  {
    command: 'webdev',
    comment: 'click anywhere to continue',
    data: [
      {
        image: reactimg,
        name: 'ReactJS',
        level: 6,
        description: 'getting the hang of it',
      },
      {
        image: jsimg,
        name: 'JavaScript',
        level: 8,
        description: 'quite good',
      },
      {
        image: nodeimg,
        name: 'NodeJS',
        level: 4,
        description: 'working on it',
      },
    ],
  },
  {
    command: 'gamedev',
    comment: 'i love making games!',
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
        description: 'quite good',
      },
    ],
  },
  {
    command: 'dev',
    comment: "wait, there's more?",
    data: [
      {
        image: pythonimg,
        name: 'Python',
        level: 7,
        description: 'quite good',
      },
      {
        image: arduinoimg,
        name: 'Arduino',
        level: 9,
        description: 'expert',
      },
    ],
  },
  {
    command: 'art',
    comment: 'check out my instagram! @gisketch',
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
        description: 'still learning',
      },
    ],
  },
  {
    command: 'achievements',
    comment: 'go check my work at the projects page!',
    data: [
      {
        image: mcmimg,
        name: '2021 MCM YES Champion',
        level: 10,
        date: 'November 2021',
        description:
          '1st place winner in a one-month game development competition against 11 schools.',
      },
      {
        image: datathonimg,
        name: '2022 Datathon National Champion',
        level: 10,
        date: 'November 2022',
        description:
          'winner of a national programming competition in the philippines.',
      },
    ],
  },
]

function SkillsMap(skills) {
  return skills.map((skill, index) => {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0 + index * 0.125, duration: 0.5 }}
      >
        <Skill
          image={skill.image}
          name={skill.name}
          level={skill.level}
          date={skill.date}
          description={skill.description}
          key={'skill-' + index}
        />
      </motion.div>
    )
  })
}

function Skills() {
  const [typing, setTyping] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [skillsState, setSkillsState] = useState(0)
  const [isReadyForComment, setIsReadyForComment] = useState(false)

  return (
    <div>
      <Nav color="var(--red)" />
      <div className="Skills">
        <motion.div
          className="Terminal"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          onAnimationComplete={() => {
            setIsReady(true)
          }}
          onClick={() => {
            if (typing) {
              return
            }
            if (skillsState < skills.length - 1) {
              setSkillsState(skillsState + 1)
              setTyping(true)
            } else {
              setSkillsState(0)
              setTyping(true)
            }
          }}
        >
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
                {isReady ? (
                  <div className="Command">
                    {typing ? (
                      <TypeAnimation
                        sequence={[
                          `skills ${skills[skillsState].command}`,
                          750,
                          () => {
                            setTyping(false)
                            setIsReadyForComment(true)
                          },
                        ]}
                      />
                    ) : (
                      <>skills {skills[skillsState].command}</>
                    )}
                  </div>
                ) : null}
              </div>

              <div
                className={`Showcase Grid-${
                  skills[skillsState].data.length > 3
                    ? 3
                    : skills[skillsState].data.length
                }`}
              >
                {typing ? null : SkillsMap(skills[skillsState].data)}
              </div>

              <div className="Line">
                {typing ? null : (
                  <div className="Command">
                    {isReadyForComment ? (
                      <TypeAnimation
                        sequence={[
                          '',
                          1000,
                          `>> page ${skillsState + 1}/${skills.length} (${
                            skills[skillsState].comment
                          })`,
                        ]}
                        speed={80}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
