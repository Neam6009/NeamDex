import React from 'react'
import classes from './projectContainer.module.css'
import backgroundImage from '../assets/project_info_card.png'
import Skill from './Skill'

const ProjectContainer = (project_info) => {
  
  return (
    <div className={classes.project_info_card}>
    <div className={classes.projectName}>
        {project_info.name}
    </div>
    <div className={classes.projectDescription}>
    {project_info.description}
    </div>
    <div className={classes.techStack}>
      Tech Stack
    </div>
    <div className={classes.skills}>
      {project_info.techStack.map(s => 
        <Skill key={s} skills={s}/>
      )}
    </div>
    </div>
  )
}

export default ProjectContainer