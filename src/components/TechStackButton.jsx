const TechStackButton = ({ tech }) => {
    return (
        <button className="px-4 py-1 rounded-sm bg-cyan-400/10 backdrop-blur-lgborder border-cyan-700/20 text-cyan-200 font-semibold text-sm">
            {tech}
        </button>
    )
}

export default TechStackButton