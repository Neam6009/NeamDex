import React from 'react'
import classes from '../Components/SpeechBubble.module.css'

const SpeechBubble = ({content}) => {
  return (
    <div className={`${classes.SpeechBubble} ${classes.left}`}>
      <p>
      {content}
      </p>
    </div>
  )
}

export default SpeechBubble