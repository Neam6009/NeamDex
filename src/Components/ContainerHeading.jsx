import React from 'react'
import classes from '../Components/ContainerHeading.module.css'

const ContainerHeading = ({content,direction}) => {
  return (
    <div className={`${classes.Container} ${classes[direction]}`}>{content}</div>
  )
}

export default ContainerHeading