import React from 'react'
import classes from '../Components/Projects.module.css'
import ContainerHeading from './ContainerHeading'
import ProjectContainer from '../Components/ProjectContainer'


let projects_array = [ 
  {name: "PropertyWala",
    description: "PropertyWala is a dynamic property listing platform that connects potential buyers with property listers and features a blog section to guide users on best real estate practices.",
    techStack : [2,1,3,4, 0,10]
  },
  {name: "Nsync",
    description: "Real-time chat app with direct messaging, and live notifications for 300+ users. Secure, fast, and optimized for seamless communication.",
    techStack : [2,1,3,4,17]
  },
  {name: "Mess Management System",
    description: " Java-based system for efficient meal ordering, billing, and inventory management in cafeterias.",
    techStack : [6,11]
  },
  {name: "Novie",
    description: "A React-based movie browsing platform with real-time search and details on thousands of movies, powered by the OMDB API for an engaging user experience.",
    techStack : [1,14,16]
  },
  {name: "Drowsiness Detection with GCN",
    description: "A model using Graph Convolutional Networks to classify facial images as drowsy or alert, achieving 70% accuracy with facial landmark analysis.",
    techStack : [5,12,13]
  },
]

const projects = () => {
  let c = 0;

  return (
    <div id = "4">
      <ContainerHeading className={classes.projects} content="Projects" direction="right"/>
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

export default projects