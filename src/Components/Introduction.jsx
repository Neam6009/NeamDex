import React from 'react'
import classes from "../Components/Introduction.module.css"
import NarrationBubble from './NarrationBubble'
import character from '../assets/character.png'
import SpeechBubble from './SpeechBubble'

const Introduction = () => {
  return (
    <div className={classes.Container} id="1">
      <div className={classes.childContainer}> 
        <img src= {character} alt="Character.jpg" className={classes.character}></img>
        <NarrationBubble heading="Neelesh" text="Developer & Tech Enthusiast"/>
      </div>
        <SpeechBubble content={"👋 Hi! I’m Neelesh, a software developer focused on high-impact, high-performance solutions. With full-stack expertise, I create real-time apps and data dashboards that turn complex data into clear insights. Let’s build something amazing together."}/>
    </div>
  )
}

export default Introduction