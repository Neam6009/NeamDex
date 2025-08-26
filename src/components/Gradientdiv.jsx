import { useEffect, useState } from "react";

const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const windowWidth = window.innerHeight

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};



const Gradientdiv = ({children,className}) =>{
    return(
        <div
            style={{
                backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgba(128, 128, 128, 0.2), rgba(0, 0, 0, 0) 50%)`
            }}

            className={className}>
            {children}
        </div>
    )
}

export default Gradientdiv