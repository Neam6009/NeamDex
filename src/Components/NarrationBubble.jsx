import React from 'react'
import classes from '../Components/NarrationBubble.module.css'

const NarrationBubble = ({heading,text}) => {
  return (
    <div className={classes.bubble}>
        <p>{heading}</p>
        <span>{text}</span>
    </div>
  )
}

export default NarrationBubble