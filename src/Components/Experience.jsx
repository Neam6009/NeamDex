import React from 'react'
import classes from './Experience.module.css'
import ContainerHeading from './ContainerHeading'
import ProjectContainer from './projectContainer'

let projects_array = [ 

    {name: "Resume Intelligence",
      description: "Development of Resume Intelligence project, utilizing nlp and openAI Api to enhance resume processing throughput, achieving an efficiency of 95%. Levaraged elastic search and vector storage to implement semantic search.",
      techStack : [5,21,22,24]
    },
    {name: "Client analytics dashboard",
      description: " Created an analytics dashboard emphasizing data visualization and user insights with the help of retool, js and mongodb",
      techStack : [4,7,23]
    },
    {name: "Internal analytics dashboard",
      description: "Designed an internal dashboard to effectively monitor and measure progress built using retool, js and mongodb",
      techStack : [4,7,23]
    },
    {name: "API and Database mangement",
      description: " Migrated a MondoDB collection to a time-series collection improving the response speed. Enabled handling of events via preset mongodb configurations and modification without disturbing the production deployment",
      techStack : [4,7,2]
    }
  ]

const Experience = () => {
  let c = 0;

  return (
    <div id="3">
    <div className={classes.heading}>

      <ContainerHeading className={classes.projects} content="Experience at HireBound" direction="left"/>
    </div>
    <div className={classes.Container}>

    <div className={classes.projectSet}>
    {projects_array.map((p) => {
            
            const projectClass = c % 2 !== 0 ? classes.project_left : classes.project_right;
            const projectElement = (
              <div className={projectClass} key={p.name}>
                <ProjectContainer key={p.name} name={p.name} description={p.description} techStack={p.techStack} />
              </div>
            );
            c += 1;
            return projectElement;
          })}

    </div>
      
    </div>
    </div>
  )
}

export default Experience