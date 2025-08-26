import { Typography } from "@mui/material"
import Experience from "./Experience"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const experienceList = [
  {
    period: "Feb 2025 - Aug 2025",
    title: "Technical Intern | Rakuten India",
    description: "Engineered and maintained scalable backend services and built a analytics dashboard monitoring multiple services, with a focus on performance and data processing.",
    techStack: ["Java", "Spring Boot", "Quarkus", "React.js", "Docker", "K8s", "MySQL", "Couchbase"]
  },
  {
    period: "March 2024 - July 2024",
    title: "SDE Intern | HireBound",
    description: "Engineered a sophisticated processor using AI and NLP to automate resume processing and provide semantic search functionality, transforming the recruitment workflow.Built and managed several real-time analytics dashboards for both client-facing and internal use. Drove key infrastructure improvements by optimizing database performance and creating a dynamic configuration system, resulting in faster data access and increased system reliability.",
    techStack: ["JavaScript", "Express.js", "MongoDB", "Python", "ElasticSearch", "OpenAI API"]
  }
]

const ExperienceList = () => {
  return (
    <div className="py-4">
      <div className="sticky top-0  bg-white/10 backdrop-blur-lg p-2 lg:hidden">
        <span className='text-slate-200 font-bold lg:hidden py-4'>EXPERIENCE</span>
      </div>
      <div className="py-4 gap-4 flex flex-col">
        {experienceList.map(exp => <Experience period={exp.period}
          title={exp.title} description={exp.description} techStack={exp.techStack} />)}
      </div>
      <a href="/Neelesh_Resume.pdf" target="_blank" className="resume-link hover:text-cyan-200">
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          View Full Résumé
          <ArrowOutwardIcon
            sx={{ fontSize: "large", marginLeft: '4px', position: 'relative', transition: 'transform 0.2s ease-in-out, right 0.2s ease-in-out, top 0.2s ease-in-out', ".resume-link:hover &": { transform: 'translate(6px, -4px)' } }}
          />
        </Typography>
      </a>
    </div>
  )
}

export default ExperienceList