import { Typography } from '@mui/material'

const About = () => {
    return (
        <div className='flex flex-col gap-4 text-gray-300'>
            <div className="sticky top-0 bg-white/10 backdrop-blur-lg p-2 lg:hidden">
                <span className='text-slate-200  font-bold lg:hidden'>ABOUT</span>
            </div>
            <Typography variant='body1'>
                I'm a developer passionate about building robust, high-performance applications from the ground up. My work lies at the intersection of powerful backend systems and intuitive user experiences, where I'm driven by the challenge of optimizing for both functionality and efficiency.
            </Typography>
            <Typography variant='body1'>
                As a recent graduate, I have a strong foundation in computer science and hands-on experience in the software development lifecycle. Most recently, as a Technical Intern at <span className='font-bold text-white hover:text-cyan-200'>Rakuten</span>, I focused on designing and deploying scalable backend services with technologies like Quarkus, while also contributing to data-driven dashboards. I also gained experience as an SDE Intern at <span className='font-bold text-white hover:text-cyan-200'>large corporation</span>  like Rakuten to a <span className='font-bold text-white hover:text-cyan-200'>HireBound</span>, where I worked on a resume intelligence project and built data-driven dashboards using Retool and MongoDB.
            </Typography>
            <Typography variant='body1'>
                I've had the opportunity to develop software across a variety of settings—from a <span className='font-bold text-white hover:text-cyan-200'>large corporation</span>  like Rakuten to a <span className='font-bold text-white hover:text-cyan-200'>start-up</span>  like HireBound. Additionally, my personal projects, such as the PropertyWala web app, have allowed me to explore full-stack development, from server-side operations to creating secure and dynamic user interfaces.
            </Typography>
            <Typography variant='body1'>
                In my spare time, I’m usually going for a run, reading a good book, watching anime, or diving into a new game.
            </Typography>
        </div>

    )
}

export default About