import React from 'react'
import classes from './Contact.module.css'
import NarrationBubble from './NarrationBubble'
import SpeechBubble from './SpeechBubble'
import character from '../assets/get_in_touch.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Contact = () => {


    return (
        <div className={classes.Container} id="5">
            <div className={classes.childContainer}>
                <img src={character} alt="Character.jpg" className={classes.character}></img>
                <div className={classes.narration} >
                    <NarrationBubble heading="Get in touch" text="" />
                </div>
            </div>
            <div className={classes.socials}>
                <a href="https://www.linkedin.com/in/neelesh-chekuri/" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                    <FaLinkedin size={60} />
                </a>
                <a href="https://github.com/Neam6009" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={60} />
                </a>
                <a href="mailto:Neelesh3003@protonmail.com" style={{ color: "#DE4C41" }}>
                    <FaEnvelope size={60} />
                </a>
            </div>

        </div>
    )
}

export default Contact