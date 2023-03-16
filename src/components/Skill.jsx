import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MutatingDots } from 'react-loader-spinner'

function Skill({image, name, level, description, date=null}) {

  function getAsciiLoadingBar(percentage) {
    const barLength = 20; // the length of the loading bar
    const filledLength = Math.round(barLength * (percentage / 10)); // calculate the number of filled characters
    const emptyLength = barLength - filledLength; // calculate the number of empty characters
    const filledChars = "/".repeat(filledLength); // create a string of filled characters
    const emptyChars = ".".repeat(emptyLength); // create a string of empty characters
    return `[${filledChars}${emptyChars}]`; // combine the strings and return the loading bar
  }

  return(
    <div className="Skill">
      <LazyLoadImage
        src={image} 
        alt={name} 
        className="Skill-Image"
        />
      <div className="Skill-Name">
        <TypeAnimation sequence={["",500,name]} cursor={false} speed={80}/>
      </div>
      {
        date !== null ? 
        <div className="Skill-Date">
          <TypeAnimation sequence={["",1000,date]} cursor={false} speed={80}/>
        </div>
        : 
        <div className={`Skill-Level Level-${level > 5 ? 'Strong' : 'Weak'}`}>
          <TypeAnimation sequence={["",1000,getAsciiLoadingBar(level)]} cursor={false} speed={80} wrapper="pre"/>
        </div>
      }
      <div className="Skill-Description">
        <TypeAnimation sequence={["",1500,description]} cursor={false} speed={80}/>
      </div>
    </div>
  )
}


export default Skill;