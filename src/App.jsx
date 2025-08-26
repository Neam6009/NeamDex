import { createTheme, Grid, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import Gradientdiv from './components/Gradientdiv'
import Contents from './components/Contents'
import { useEffect, useRef, useState } from 'react'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
})
const App = () => {

  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollContainerRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.3,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <ThemeProvider theme={theme}>
      <div className='font-inter'>
        <Gradientdiv className={"bg-black lg:w-screen lg:h-screen text-white"} >
          <Grid container spacing={2} className="lg:h-full">
            <Grid size={{ xs: 12, md: 6 }} >
              <Navbar
                activeSection={activeSection}
                sectionRefs={sectionRefs} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="lg:h-full lg:overflow-y-auto">
              <Contents sectionRefs={sectionRefs}/>
            </Grid>
          </Grid>
        </Gradientdiv>
      </div>
    </ThemeProvider>
  )
}

export default App
