import '../styles/Projects.css'
import Nav from '../components/Nav'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RandomReveal } from 'react-random-reveal'

import React, { useState, useRef, useEffect } from 'react'

import aottgimg from '../assets/project_img/aottg.jpg'
import zeldaimg from '../assets/project_img/zelda.png'
import datathonimg from '../assets/project_img/datathon.jpg'
import covidimg from '../assets/project_img/covid.png'
import animationimg from '../assets/project_img/animation.jpg'
import artimg from '../assets/project_img/instagram.png'

const projects = [
  {
    title: 'CURRENT',
    projects: [
      {
        img: aottgimg,
        title: 'AoTTG 2',
        subtitle: 'Junior Developer and Lead 2D Artist',
        link: 'https://github.com/AoTTG-2/AoTTG-2',
        description:
          "AoTTG 2 is a community effort to continue the development of an indie game known as Attack on Titan Tribute Game (AoTTG) developed by FengLee. I started working on AoTTG 2 in 2020. I'm currently working as a lead 2D artist. I'm also a junior developer on the team.",
      },
      {
        img: artimg,
        title: 'Art Gallery',
        subtitle: 'I make digital artworks on my Instagram!',
        link: 'https://www.instagram.com/gisketch/',
        description:
          "I love creating digital artworks featuring my favorite characters and franchises from anime to video games. Follow me @gisketch to explore my collection and discover new fanart pieces. I can't wait to share my passion with you!",
      },
      {
        img: animationimg,
        title: 'Animations',
        subtitle: 'I make animations on my YouTube!',
        link: 'https://www.youtube.com/@gisketch/',
        description:
          "As a fan of many anime and video game franchises, I've created fan animations and content on my YouTube channel in the past. Although my last one was from 2018, I still cherish those memories and would like to share my creations with fellow fans. On my channel, you'll find a variety of fan animations, speedpaints, and other content inspired by my favorite franchises.",
      },
    ],
  },
  {
    title: '2023',
    projects: [
      {
        img: zeldaimg,
        title: 'ZELDA',
        subtitle: 'My Undergraduate Thesis Project',
        link: 'https://github.com/gisketch/ZELDA-math-parser',
        description:
          "Zelda is a natural language mathematical expression parser powered by OpenAI's GPT-3 language model. It is designed to work on a touch screen display used in Raspberry Pi. The application is built in JavaScript and ReactJS.",
      },
    ],
  },
  {
    title: '2022',
    projects: [
      {
        img: datathonimg,
        title: 'Datathon Competition',
        subtitle: '2022 National Jiecep National Champion 🏆',
        link: 'https://www.facebook.com/ghegijmnz/posts/pfbid021pjTeKwmRqAph5ur8GhJYDMYWhNBT373EPve6Ms4jJSxZGcKhx71ya5QnLdM22Jgl',
        description:
          "My leadership and my team's collective effort led us to win the national programming competition (Whole Philippines) with 118 out of 120 points. It was an unexpected victory, and I am grateful for my and my teammates' problem-solving skills and the unwavering support of our coach and the ICTC family. This victory was a significant achievement.",
      },
    ],
  },
  {
    title: '2021',
    projects: [
      {
        img: covidimg,
        title: 'COVID Armageddon',
        subtitle: '2021 MCM YES Competition Champion 🏆',
        link: 'https://github.com/gisketch/covid-armageddon',
        description:
          'Developing this game was a grueling task that required sacrifices, hard work, and dedication. As the only one on the team with coding and art experience, I worked tirelessly to bring the game to life while juggling my studies. Despite the challenges, the game was well-received, and the experience taught me the value of perseverance and the rewards of hard work.',
      },
    ],
  },
]

function Projects() {
  const [projectsReady, setProjectsReady] = useState(false)

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.Project-Card'), {
      max: 7,
      speed: 400,
    })
  }, [])

  const randomRevealCharacters = [
    '█',
    '░',
    '`',
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
    '[',
    '{',
    ']',
    '}',
    '\\',
    '|',
    ';',
    ':',
    "'",
    '"',
    ',',
    '<',
    '.',
    '>',
    '/',
    '?',
  ]

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  }

  return (
    <div>
      <Nav color="var(--purple)" />
      <div className="Projects">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="Contact-Line"
        >
          <motion.div
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5, duration: 0.5 }}
            className="Contact-Line-Circle"
          ></motion.div>
        </motion.div>

        <motion.div className="Projects-Header">
          <div className="Projects-Title">
            <TypeAnimation
              sequence={[
                '',
                1500,
                'Projects />',
                () => {
                  setProjectsReady(true)
                },
              ]}
              cursor={false}
              speed={80}
            />
          </div>
          {projectsReady ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="Projects-Subtitle"
            >
              <RandomReveal
                isPlaying
                duration={1.5}
                characters="Selected dev and art projects..."
                revealEasing="easeInQuad"
                characterSet={randomRevealCharacters}
              />
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: projectsReady ? 1 : 0 }}
          transition={{ duration: 0.75 }}
          className="Projects-Section"
        >
          {/* Project Mapping */}

          {projects.map((project, index) => {
            return (
              <>
                <div className="Projects-List">
                  <div
                    key={index}
                    className={`Projects-${
                      (index + 1) % 2 === 1 ? 'Right' : 'Left'
                    } Projects-Section-Title`}
                  >
                    {project.title}
                  </div>
                  {project.projects.map((proj, projindex) => {
                    return (
                      <motion.div
                        className={`Project-Wrapper Card-${
                          (projindex + index + 1) % 2 === 1 ? 'Left' : 'Right'
                        }`}
                      >
                        <div
                          className={`Project-Card `}
                          key={projindex}
                          onClick={() => {
                            window.open(proj.link, '__blank')
                          }}
                        >
                          <motion.div className="Project-Image">
                            <div className="Image-Gradient"></div>
                            <LazyLoadImage
                              className="Project-Image"
                              src={proj.img}
                              alt={proj.title}
                            />
                            <motion.div
                              className={`Project-Texts Project-Text-${
                                (projindex + index + 1) % 2 === 1
                                  ? 'Left'
                                  : 'Right'
                              }`}
                            >
                              <div
                                className={`Project-Name ${
                                  proj.title.length > 9
                                    ? 'Name-Long'
                                    : 'Name-Short'
                                }`}
                              >
                                {proj.title}
                              </div>
                              <div className="Project-Subtitle">
                                {proj.subtitle}
                              </div>
                            </motion.div>
                          </motion.div>
                          <motion.div
                            className={`Project-Description Desc-${
                              (projindex + index + 1) % 2 === 1
                                ? 'Left'
                                : 'Right'
                            }`}
                          >
                            {proj.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </motion.div>
        <div className="Projects-Footer">
          <motion.a
            href="/contact"
            className="Projects-Contact"
            animate={{ color: 'var(--light)' }}
            whileHover={{
              color: 'var(--blue)',
              letterSpacing: '0.2rem',
              scale: 1.1,
            }}
          >
            get in touch
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Projects
