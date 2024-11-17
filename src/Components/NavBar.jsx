import React, { useRef, useState } from 'react'
import classes from './NavBar.module.css'
import burger from '../assets/burger-bar.png'

const NavBar = () => {

    const [selected, setSelected] = useState("About");
    const [isMini, setMini] = useState(false);

    const click = (e) => {
        setSelected(e.target.id);
    }

    return (
        <div>
            <div className={classes.menu} onClick={()=>{setMini(!isMini)}}>
                {
                    <img src={burger} alt="menu.png"></img>
                }
            </div>
            {
                isMini &&
                <div className={classes.Container}>
                    <div className={classes.items}>
                        <a href='#2'><div className={classes.navItem} id="Skills" onClick={(e) => { click(e); }} >Skills</div></a>
                        <a href='#4'><div className={classes.navItem} id="Projects" onClick={(e) => { click(e); }}>Projects</div></a>
                        <a href='#3'><div className={classes.navItem} id="Experience" onClick={(e) => { click(e); }}>Experience</div></a>
                        <a href='#0'><div className={classes.navItem} id="About" onClick={(e) => { click(e); }}>About</div></a>
                        <a href='#5'><div className={classes.navItem} id="Contact" onClick={(e) => { click(e); }}>Contact</div></a>
                    </div>
                    <div className={classes.selected}>
                        <div className={classes.text}>{selected}</div>
                    </div>

                </div>
            }
        </div>

    )
}

export default NavBar