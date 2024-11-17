import React from 'react'
import classes from './Skill.module.css'
import mongoDb from '../assets/mongodb.png'

const Skill = (s) => {

  let skill_array = [
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", //0  aws
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" ,                                 //1  react
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",                       //2  nodejs
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" ,                             //3  expressjs
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" ,                             //4  mongoDb
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" ,                               //5  python
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" ,                                   //6  java
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" ,                       //7  js
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" ,                       //8  ts
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" ,                                         //9  c
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" ,                               //10 docker
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg",                            //11 mysql
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" ,                             //12 pytorch
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" ,                       //13 tensorflow
     "src/assets/omdb.png",                                                                                                 //14 omdb
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",                                  //15 html
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",                                    //16 css
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",                      //17 tailwind
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",                    //18 framer
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",                                //19 github
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",                  //20 github-actions
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",                              //21 jupyter
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",                                  //22 numpy
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg",                                //23 plotly
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",                  //24 elastic search
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",                        //25 kubernetes
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",                            //26 solidity
  ]

  let source = skill_array[s.skills];
 
  return (
    <div className={classes.skill}>
      {
        <img src={source} alt='stack img'/> 
       }

    </div>
  )
}

export default Skill