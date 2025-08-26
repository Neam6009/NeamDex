import About from './About'
import ExperienceList from './ExperienceList'
import Projects from './Projects'

const Contents = ({ sectionRefs }) => {
  return (
    <div className='p-10 md:pr-12 md:py-24 lg:p-0 '>
      <div ref={sectionRefs.about} id='about'>
        <About/>
      </div>
      <div ref={sectionRefs.experience} id='experience'>
        <ExperienceList/>
      </div>
      <div ref={sectionRefs.projects} id='projects'>
        <Projects/>
      </div>
    </div>
  )
}

export default Contents