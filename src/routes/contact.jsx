import Nav from '../components/nav.jsx';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { useState, useRef, useEffect } from 'react';

import '../styles/Contact.css'

function Caret() {
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCaret((prevShowCaret) => !prevShowCaret);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span>{showCaret ? '|' : ''}</span>;
}

function Contact() {
  const [contactReady, setContactReady] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  const handleNameClick = () => {
    nameRef.current.focus();
  }

  const handleEmailClick = () => {
    emailRef.current.focus();
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const circleVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };


  return (
    <div>
      <Nav color="var(--blue)"/>
      <div className="Contact">


        <motion.div
          initial={{height: 0}}
          animate={{height: 'auto'}}
          transition={{delay: 1.25, duration: 0.5}}
          className="Contact-Line"
          >
            <motion.div
              variants={circleVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5, duration: 0.5 }}
              className="Contact-Line-Circle"
              >
            </motion.div>
        </motion.div>

        <motion.div className="Contact-Header">
            <div className="Contact-Title">
              <TypeAnimation sequence={["",1500,"Contact />", ()=>{setContactReady(true)}]} cursor={false} speed={80} />
            </div>
        </motion.div>

        <div className="Contact-Content">

          <div className="Code-Line">
            <span className="Line-Number">00</span>
            <span className="Line-Text">
              <span className="Line-Methods">class</span>
              <span className="Line-Prop"> ContactMe</span>
              {` {`}
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">01</span>
            <span className="Line-Text">
              <span className="Line-Dots">..</span>
              <span className="Line-Methods">constructor</span>
              {`() {`}
            </span>
          </div>

          <div className="Code-Line" onClick={()=>{handleNameClick()}} style={{cursor: 'pointer'}}>
            <span className="Line-Number">02</span>
            <span className="Line-Text">
              <span className="Line-Dots">....</span>
              <span className="Line-Scope">this</span>{`.`}
              <span className="Line-Prop2">name</span>{` = `}
              <span className="Line-String">
                {`'${name}`}{nameFocus ? <Caret /> : ''}{"'"}
              </span>{`;`}
              <span className="Line-Comment">
                {nameFocus ? null : ` //click me to input your name`}
              </span>
            </span>
          </div>

          <div className="Code-Line" onClick={()=>{handleEmailClick()}} style={{cursor: 'pointer'}}>
            <span className="Line-Number">03</span>
            <span className="Line-Text">
              <span className="Line-Dots">....</span>
              <span className="Line-Scope">this</span>{`.`}
              <span className="Line-Prop2">email</span>{` = `}
              <span className="Line-String">
                {`'${email}`}{emailFocus ? <Caret /> : ''}{"'"}
              </span>{`;`}
              <span className="Line-Comment">
                {emailFocus ? null : ` // <<=== email`}
              </span>
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">04</span>
            <span className="Line-Text">
              <span className="Line-Dots">..</span>{`}`}
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">05</span>
            <span className="Line-Text">
              <span className="Line-Dots">..</span>
              <span className="Line-Prop">emailBody</span>{`() {`}

            </span>
          </div>


          <div className="InputFields">
            <input
              ref={nameRef}
              className="Line-Input"
              type="text"
              value={name}
              onChange={handleNameChange}
              onFocus={()=>{setNameFocus(true)}}
              onBlur={()=>{setNameFocus(false)}}
              />
              <input
                ref={emailRef}
                className="Line-Input"
                type="text"
                value={email}
                onChange={handleEmailChange}
                onFocus={()=>{setEmailFocus(true)}}
                onBlur={()=>{setEmailFocus(false)}}
                />
          </div>
          
        </div>

      </div>
    </div>
  );
}

class ContactMe {
	constructor() {
		this.name = '<INPUTFIELD>';
		this.email = '<INPUTFIELD>';
	}
	emailBody() {
		return {
			'subject' : '<INPUTFIELD>',
			'message' : '<TEXTAREA>',
		}
	}
}

export default Contact;


