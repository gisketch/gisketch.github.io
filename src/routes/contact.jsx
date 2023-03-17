import Nav from '../components/Nav.jsx';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { useState, useRef, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import { FaGithub, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane } from 'react-icons/fa'

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
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [emailBodyFocus, setEmailBodyFocus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendingEmailText, setSendingEmailText] = useState("Sending Email...")


  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const emailBodyRef = useRef(null);
  const form = useRef();


  const sendEmail = () => {

    emailjs.sendForm('service_ytcf4kr', 'template_jycn3xn', form.current, 'psgeH9Sn3HF-ug0Wv')
      .then((result) => {
          console.log(result.text);
          if(result.text === "OK") {
            setSendingEmailText("Email Sent!")
            console.log("EMAIL SENT");
          }
      }, (error) => {
        setSendingEmailText("Something went wrong :<")
      });
  };

  const handleSendEmail = () => {
    if(!isEmailValid || name === "" || subject === "" || emailBody === "") {
      setSendingEmail(true);
      setSendingEmailText("Please fill out all fields :<");
      return;
    }
    setSendingEmail(true);
    setSendingEmailText("Sending E-mail...");
    console.log("SENDING...")
    sendEmail();
  }
  
  const isValidEmail= (email) => {
    // regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // check if email matches the regex
    return emailRegex.test(email);
  }
  
  const handleNameClick = () => {
    nameRef.current.focus();
  }

  const handleEmailClick = () => {
    emailRef.current.focus();
  }

  const handleSubjectClick = () => {
    subjectRef.current.focus();
  }

  const handleEmailBodyClick = () => {
    emailBodyRef.current.focus();
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    if(event.target.value === "") {
      setIsEmailValid(true);
    } else
    {
      setIsEmailValid(isValidEmail(event.target.value));
    }
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailBodyChange = (event) => {
    setEmailBody(event.target.value);
  };

  const getEmailComment = () => {
    if(email === "") {
      return ` //click me to input your e-mail`;
    }
    if(isEmailValid) {
      return ` //awesome`;
    } else if(!isEmailValid) {
      return ` //this is not an e-mail :<`;
    }
  }

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
          initial={{scaleY: 0, transformOrigin: 'top'}}
          animate={{scaleY: 1, transformOrigin: 'top'}}
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
              <TypeAnimation sequence={["",1500,"dev@gisketch.com />", ()=>{setContactReady(true)}]} cursor={false} speed={80} />
            </div>
        </motion.div>

        <motion.div
          initial={{scaleY: 0 , transformOrigin: 'top'}}
          animate={{scaleY: contactReady ? 1 : 0}}
          className="Contact-Content">

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
                '<span className={nameFocus ? "Line-Field" : ""}>
                  {name}
                </span>
                {nameFocus ? <Caret /> : ''}'
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
                '<span className={emailFocus ? "Line-Field" : ""}>
                  {email}
                </span>
                {emailFocus ? <Caret /> : ''}'
              </span>{`;`}
              <span className="Line-Comment">
                {
                  emailFocus ?
                  null :
                  getEmailComment()
                }
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

          <div className="Code-Line">
            <span className="Line-Number">06</span>
            <span className="Line-Text">
              <span className="Line-Dots">....</span>
              <span className="Line-Methods">return</span>{` {`}
            </span>
          </div>

          <div className="Code-Line" onClick={()=>{handleSubjectClick()}} style={{cursor: 'pointer'}}>
            <span className="Line-Number">07</span>
            <span className="Line-Text">
              <span className="Line-Dots">......</span>
              <span className="Line-String">'subject'</span>
                {` : `}
              <span className="Line-String">
                '<span className={subjectFocus ? "Line-Field" : ""}>
                  {subject}
                </span>
                {subjectFocus ? <Caret /> : ''}'
              </span>{`,`}
              <span className="Line-Comment">
                {subjectFocus ? null : ` // What is this email about?`}
              </span>
            </span>
          </div>

          <div className="Code-Line" onClick={()=>{handleEmailBodyClick()}} style={{cursor: 'pointer'}}>
            <span className="Line-Number">08</span>
            <span className="Line-Text">
              <span className="Line-Dots">......</span>
              <span className="Line-String">'body'</span>
                {` : `}
              <span className="Line-String">
                '<span className={emailBodyFocus ? "Line-Field" : ""}>
                  {emailBody}
                </span>
                {emailBodyFocus ? <Caret /> : ''}'
              </span>{`,`}
              <span className="Line-Comment">
                {emailBodyFocus ? null : ` // What do you want to say?`}
              </span>
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">09</span>
            <span className="Line-Text">
              <span className="Line-Dots">....</span>{`}`}
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">10</span>
            <span className="Line-Text">
              <span className="Line-Dots">..</span>{`}`}
            </span>
          </div>

          <div className="Code-Line">
            <span className="Line-Number">11</span>
            <span className="Line-Text">
              {`}`}
            </span>
          </div>


          <form className="InputFields" ref={form} onSubmit={sendEmail}>
            <input
              ref={nameRef}
              className="Line-Input"
              type="text"
              name="user_name"
              value={name}
              onChange={handleNameChange}
              onFocus={()=>{setNameFocus(true)}}
              onBlur={()=>{setNameFocus(false)}}
              />
            <input
              ref={emailRef}
              className="Line-Input"
              type="text"
              name="user_email"
              value={email}
              onChange={handleEmailChange}
              onFocus={()=>{setEmailFocus(true)}}
              onBlur={()=>{setEmailFocus(false)}}
              />
            <input
              ref={subjectRef}
              className="Line-Input"
              type="text"
              name="user_subject"
              value={subject}
              onChange={handleSubjectChange}
              onFocus={()=>{setSubjectFocus(true)}}
              onBlur={()=>{setSubjectFocus(false)}}
              />
            <textarea
              ref={emailBodyRef}
              className="Line-Input"
              type="text"
              name="message"
              value={emailBody}
              onChange={handleEmailBodyChange}
              onFocus={()=>{setEmailBodyFocus(true)}}
              onBlur={()=>{setEmailBodyFocus(false)}}
              />
          </form>
        </motion.div>
        <motion.div className="Contact-Footer">
          <span className="SendEmail">
            <motion.div
              initial={{scale:0}}
              animate={{
                scale:1, 
                transition:{duration: 0.5, delay: 2}
              }} 
              whileHover={{ color: 'var(--blue)', borderColor: 'var(--blue)'}}
              className="Contact-Send-Button"
              onClick={handleSendEmail}
              >
              <span>
                Send E-mail
              </span>
              <span>
                <FaPaperPlane />
              </span>
            </motion.div>
            <span className="EmailInfo">
              {sendingEmail ? sendingEmailText : ""}
            </span>
          </span>
          
          <div className="Contact-Socials">
            <motion.a
              initial={{scale:0}}
              animate={{
                scale:1, 
                transition:{duration: 0.5, delay: 2}
              }} 
              whileHover={{
                color: 'var(--yellow)',
                transition:{duration: 0.25, delay: 0},
              }}
              href="https://github.com/gisketch/">
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{scale:0}}
              animate={{
                scale:1, 
                transition:{duration: 0.5, delay: 2.25}
              }} 
              whileHover={{
                color: 'var(--cyan)',
                transition:{duration: 0.25, delay: 0},
              }}
              href="https://twitter.com/gisketch">
              <FaTwitter />
            </motion.a>
            <motion.a
              initial={{scale:0}}
              animate={{
                scale:1, 
                transition:{duration: 0.5, delay: 2.5}
              }} 
              whileHover={{
                color: 'var(--purple)',
                transition:{duration: 0.25, delay: 0},
              }}
              href="https://www.instagram.com/gisketch/">
              <FaInstagram />
            </motion.a>
            <motion.a
              initial={{scale:0}}
              animate={{
                scale:1, 
                transition:{duration: 0.5, delay: 2.75}
              }} 
              whileHover={{
                color: 'var(--red)',
                transition:{duration: 0.25, delay: 0},
              }}
              href="https://www.youtube.com/@gisketch">
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;