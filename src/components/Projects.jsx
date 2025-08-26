import Project from "./Project"

const projects = [
    {
        title: "PropertyWala",
        description: "PropertyWala is a dynamic property listing platform that connects potential buyers with property listers and features a blog section to guide users on best real estate practices.",
        techStack: ["Express.js", "React.js", "MongoDB", "AWS", "Docker", "Node.js"],
        img: "/propertyWala.png"
    },
    {
        title: "Nsync",
        description: "Real-time chat app with direct messaging, and live notifications for 300+ users. Secure, fast, and optimized for seamless communication.",
        techStack: ["Express.js", "React.js", "Node.js", "WebSocket"],
        img: "/nsync.png"
    },
    {
        title: "Novie",
        description: "A React-based movie browsing platform with real-time search and details on thousands of movies, powered by the OMDB API for an engaging user experience.",
        techStack: ["React.js", "MySQL"],
        img: "/novie.png"
    },
    {
        title: "Mess Management System",
        description: " Java-based system for efficient meal ordering, billing, and inventory management in cafeterias.",
        techStack: ["Java", "MySQL"],
        img: "/N_Tech_LOGO.png"
    },
    {
        title: "Drowsiness Detection with GCN",
        description: "A model using Graph Convolutional Networks to classify facial images as drowsy or alert, achieving 70% accuracy with facial landmark analysis.",
        techStack: ["Python", "Tensorflow", "PyTorch"],
        img: "/N_Tech_LOGO.png"
    },
]

const Projects = () => {
    return (
        <div className="py-4">
            <div className="sticky top-0  bg-white/10 backdrop-blur-lg p-2 lg:hidden">
                <span className='text-slate-200 font-bold lg:hidden py-4'>PROJECTS</span>
            </div>
            <div className="py-4 gap-4 flex flex-col">
                {projects.map(project => <Project title={project.title} description={project.description} techStack={project.techStack} img={project.img} />)}
            </div>
        </div>
    )
}

export default Projects