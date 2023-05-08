import Nav from '../components/Nav'
import '../styles/About.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Comment = (paragraphState) => {
  switch (paragraphState) {
    case 1:
      return '//click anywhere to continue'
    case 2:
      return '//two more times'
    case 3:
      return '//three of four'
    case 4:
      return '//last one'
    default:
      return '//Click anywhere to continue'
  }
}

const Paragraph = ({ paragraphState, typing, setTyping }) => {
  const renderParagraph = () => {
    switch (paragraphState) {
      case 1:
        return (
          <motion.p className={'Paragraph About-1'}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `My passion for computers started when I was just three years old, and I was allowed to use the computer at my parents' printing shop. As I grew older, I became interested in gaming and taught myself how to animate stick figures and hand-draw animations with a mouse.`,
                  750,
                  () => {
                    setTyping(false)
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                My passion for <b>computers</b> started when I was just three
                years old, and I was allowed to use the computer at my parents'
                printing shop. As I grew older, I became interested in gaming
                and taught myself how to <b>animate</b> stick figures and
                hand-draw animations with a mouse.
              </motion.span>
            )}
          </motion.p>
        )
      case 2:
        return (
          <motion.p className={'Paragraph About-2'}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `In high school, I tried developing games by watching tutorials on YouTube, and I fell in love with programming. Despite pursuing a degree in electronics engineering in college, I spent most of my time learning programming on my own through online resources.`,
                  750,
                  () => {
                    setTyping(false)
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                In high school, I tried developing games by watching tutorials
                on YouTube, and I fell in love with <b>programming</b>. Despite
                pursuing a degree in electronics engineering in college, I spent
                most of my time learning programming on my own through online
                resources.
              </motion.span>
            )}
          </motion.p>
        )
      case 3:
        return (
          <motion.p className={'Paragraph About-3'}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `My hard work paid off when I won first place in a Game Development competition in the whole Mindanao Region and a National Programming Competition, both of which I won on my own without any guidance.`,
                  750,
                  () => {
                    setTyping(false)
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                My hard work paid off when I won first place in a{' '}
                <b>Game Development competition</b> in the whole Mindanao Region
                and a <b>National Programming Competition</b>, both of which I
                won on my own without any guidance.
              </motion.span>
            )}
          </motion.p>
        )
      case 4:
        return (
          <motion.p className={'Paragraph About-4'}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `This portfolio website is a testament to my skills and hard work, and I hope it inspires others to pursue their passions and work hard to achieve their goals. Thank you for visiting my website, and I hope you enjoy browsing through my projects.`,
                  750,
                  () => {
                    setTyping(false)
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                This portfolio website is a testament to my <b>skills</b> and
                hard work, and I hope it inspires others to pursue their
                passions and work hard to achieve their goals. Thank you for
                visiting my website, and I hope you enjoy browsing through my{' '}
                <b>projects</b>.
              </motion.span>
            )}
          </motion.p>
        )
      default:
        return null
    }
  }

  return <>{renderParagraph()}</>
}

function About() {
  const [paragraphState, setParagraphState] = useState(1)
  const [typing, setTyping] = useState(true)

  return (
    <div>
      <Nav color="var(--green)" />
      <div
        className="About"
        onClick={() => {
          if (paragraphState === 5 && typing === false) {
            setParagraphState(1)
            setTyping(true)
          } else if (paragraphState < 5 && typing === false) {
            setParagraphState(paragraphState + 1)
            setTyping(true)
          }
        }}
      >
        <p className="Comment">
          {typing ? null : (
            <TypeAnimation sequence={[Comment(paragraphState)]} speed={80} />
          )}
          {paragraphState === 5 ? (
            <TypeAnimation sequence={['//check these out']} speed={80} />
          ) : null}
        </p>
        <Paragraph
          paragraphState={paragraphState}
          typing={typing}
          setTyping={setTyping}
        />
        <motion.div
          className="Hyperlinks"
          initial={{ opacity: 0 }}
          animate={{
            opacity: paragraphState === 5 ? 1 : 0,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <motion.a
            animation={{
              y: paragraphState === 5 ? 0 : 250,
            }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              letterSpacing: '0.25rem',
              color: 'var(--red)',
            }}
            style={{
              pointerEvents: paragraphState === 5 ? 'all' : 'none',
            }}
            href="/skills"
          >
            skills
          </motion.a>
          <motion.a
            animation={{
              y: paragraphState === 5 ? 0 : 250,
            }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              letterSpacing: '0.25rem',
              color: 'var(--purple)',
            }}
            style={{
              pointerEvents: paragraphState === 5 ? 'all' : 'none',
            }}
            href="/projects"
          >
            projects
          </motion.a>

          <motion.a
            animation={{
              y: paragraphState === 5 ? 0 : 250,
            }}
            transition={{
              duration: 0.5,
            }}
            whileHover={{
              letterSpacing: '0.25rem',
              color: 'var(--green)',
            }}
            style={{
              pointerEvents: paragraphState === 5 ? 'all' : 'none',
            }}
            onClick={() => {
              setParagraphState(1)
              setTyping(true)
            }}
          >
            <b>read again</b>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default About
