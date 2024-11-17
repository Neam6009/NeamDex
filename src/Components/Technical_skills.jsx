import React from 'react'
import classes from './Technical_skills.module.css'
import ContainerHeading from './ContainerHeading'
import Skill from './Skill'


const Technical_skills = () => {

    let techStack = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  return (
  <div id="2">
<div className={classes.heading}>
<ContainerHeading content={"Technical Skills"} direction={"right"}/>

</div>
    <div className={classes.Container}>
    <div className={classes.skills}>
      {techStack.map(s => 
      s%2 == 0 ? 
      <div key={s} className={`${classes.skill} ${classes.upDown}`}>
          <Skill key={s} skills={s}/>
      </div>
      :
      <div key={s} className={`${classes.skill} ${classes.downUp}`}>
          <Skill key={s} skills={s}/>
      </div>
      )}
    </div>
    </div>
  </div>
  )
}

export default Technical_skills