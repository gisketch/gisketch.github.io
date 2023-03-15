import Nav from '../components/Nav';
import '../styles/About.css'
import {
  motion,
} from "framer-motion";
import {
  useState
} from 'react';
import { TypeAnimation } from 'react-type-animation';

const Paragraph = ({ paragraphState, typing, setTyping }) => {

  const renderParagraph = () => {
    switch (paragraphState) {
      case 1:
        return (
          <motion.p className={"Paragraph About-1"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `My passion for computers started when I was just three years old, and I was allowed to use the computer at my parents' printing shop. As I grew older, I became interested in gaming and taught myself how to animate stick figures and hand-draw animations of DBZ anime fights.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                My passion for <b>computers</b> started when I was just three years old,
                and I was allowed to use the computer at my parents' printing shop.
                As I grew older, I became interested in gaming and taught myself how
                to <b>animate</b> stick figures and hand-draw animations of DBZ anime fights.
              </motion.span>
            )}
          </motion.p>
        );
      case 2:
        return (
          <motion.p className={"Paragraph About-2"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `In senior high school, I tried developing games by watching tutorials on YouTube, and I fell in love with programming. Despite pursuing a degree in electronics engineering in college, I spent most of my time learning programming on my own through online resources.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : (
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                In senior high school, I tried developing games by watching tutorials on YouTube,
                and I fell in love with <b>programming</b>. Despite pursuing a degree in electronics
                engineering in college, I spent most of my time learning programming on my own through
                online resources.
              </motion.span>
            )}
          </motion.p>
        );
      case 3:
        return (
          <motion.p className={"Paragraph About-3"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `My hard work paid off when I won first place in a Game Development competition in the whole Mindanao Region and a National Programming Competition, both of which I won on my own without any guidance.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                My hard work paid off when I won first place in a <b>Game
                Development competition</b> in the whole Mindanao
                Region and a <b>National Programming Competition</b>,
                both of which I won on my own without any guidance.
              </motion.span>
            )}
          </motion.p>
        );
      case 4:
        return (
          <motion.p className={"Paragraph About-4"}>
            {typing ? (
              <TypeAnimation
                sequence={[
                  `This portfolio website is a testament to my skills and hard work, and I hope it inspires others to pursue their passions and work hard to achieve their goals. Thank you for visiting my website, and I hope you enjoy browsing through my projects.`,
                  750,
                  () => {
                    setTyping(false);
                  },
                ]}
                speed={99}
                cursor={true}
                className="TypeAnimation"
              />
            ) : ( 
              <motion.span animate={{ scale: typing ? 1.1 : 1 }}>
                This portfolio website is a testament to my <b>skills</b> and hard work,
                and I hope it inspires others to pursue their passions and work
                hard to achieve their goals. Thank you for visiting my website,
                and I hope you enjoy browsing through my <b>projects</b>.
              </motion.span>
            )}
          </motion.p>
        );
      default:
        return null;
    }
  };

  return <>{renderParagraph()}</>
}

function About() {

  const [paragraphState, setParagraphState] = useState(1);
  const [typing, setTyping] = useState(true);



  return(
      <div>
        <Nav color="var(--green)"/>
        <div className="About" onClick={()=>{
          if (paragraphState === 4 && typing === false) {
            setParagraphState(1);
            setTyping(true);
          } else if ( paragraphState < 4 && typing === false){
            setParagraphState(paragraphState + 1);
            setTyping(true);
          }
        }}>
            <Paragraph paragraphState={paragraphState} typing={typing} setTyping={setTyping}/>
        </div>
      </div>
    )
}

export default About;