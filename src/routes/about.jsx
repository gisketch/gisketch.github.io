import Nav from '../components/Nav';
import '../styles/About.css'
import {
  motion,
} from "framer-motion";
import {
  useState
} from 'react';

function About() {

  const [paragraphState, setParagraphState] = useState(1);

  return(
      <div>
        <Nav color="var(--green)"/>
        <div className="About" onClick={()=>{
          if (paragraphState === 4) {
            setParagraphState(1);
          } else {
            setParagraphState(paragraphState + 1);
          }
        }}>
            <motion.p
              className={"Paragraph About-1"}
              initial={
                {
                  opacity: 0.3,
                  y: -100,
                  scale: 0.8,
                }
              }
              animate={
                {
                  opacity: paragraphState === 1 ? 1 : 0.3,
                  y: 0 + (paragraphState - 1) * -400,
                  scale: paragraphState === 1 ? 1 : 0.8,
                }
              }
              transition={
                {
                  duration: 0.5,
                }
              }
            >
              My passion for <b>computers</b> started when I was just three years old,
              and I was allowed to use the computer at my parents' printing shop.
              As I grew older, I became interested in gaming and taught myself how
              to <b>animate</b> stick figures and hand-draw animations of DBZ anime fights.
            </motion.p>
            
            <motion.p
              className={"Paragraph About-2"}
              initial={
                {
                  opacity: 0.3,
                  y: -100,
                  scale: 0.8,
                }
              }
              animate={
                {
                  opacity: paragraphState === 2 ? 1 : 0.3,
                  y: 0 + (paragraphState - 1) * -400,
                  scale: paragraphState === 2 ? 1 : 0.8,
                }
              }
              transition={
                {
                  duration: 0.5,
                }
              }
            >
              In senior high school, I tried developing games by watching tutorials on YouTube,
               and I fell in love with <b>programming</b>. Despite pursuing a degree in electronics 
               engineering in college, I spent most of my time learning programming on my own 
               through online resources.
            </motion.p>
            
            <motion.p
              className={"Paragraph About-3"}
              initial={
                {
                  opacity: 0.3,
                  y: -100,
                  scale: 0.8,
                }
              }
              animate={
                {
                  opacity: paragraphState === 3 ? 1 : 0.3,
                  y: 0 + (paragraphState - 1) * -400,
                  scale: paragraphState === 3 ? 1 : 0.8,
                }
              }
              transition={
                {
                  duration: 0.5,
                }
              }
            >
              My hard work paid off when I won first place in a <b>Game
              Development competition</b> in the whole Mindanao
              Region and a <b>National Programming Competition</b>,
              both of which I won on my own without any guidance.
            </motion.p>
            
            <motion.p
              className={"Paragraph About-4"}
              initial={
                {
                  opacity: 0.3,
                  y: -100,
                  scale: 0.8,
                }
              }
              animate={
                {
                  opacity: paragraphState === 4 ? 1 : 0.3,
                  y: 0 + (paragraphState - 1) * -400,
                  scale: paragraphState === 4 ? 1 : 0.8,
                }
              }
              transition={
                {
                  duration: 0.5,
                }
              }
            >
              
            This portfolio website is a testament to my <b>skills</b> and hard work,
            and I hope it inspires others to pursue their passions and work
            hard to achieve their goals. Thank you for visiting my website,
            and I hope you enjoy browsing through my <b>projects</b>.
            </motion.p>
            
            {/* <p className="ScrollDown">CONTINUE</p> */}
        </div>
      </div>
    )
}

export default About;