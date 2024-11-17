import React from 'react'
import Header from './Components/Header'
import classes from './App.module.css'
import Introduction from './Components/Introduction'
import Projects from './Components/projects'
import Technical_skills from './Components/Technical_skills'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar'



const App = () => {
  return (
    <div className={classes.Container} >
      <NavBar/>
      <div className={classes.Content}>
        <Header/>
        <Introduction/>
        <Technical_skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App