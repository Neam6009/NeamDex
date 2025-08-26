import { List, ListItem, ListItemText, Typography } from '@mui/material'

const Menu = ({ activeSection, sectionRefs }) => {
    const handleScrollTo = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const menuItems = [
        { key: 'about', label: 'ABOUT', ref: sectionRefs.about },
        { key: 'experience', label: 'EXPERIENCE', ref: sectionRefs.experience },
        { key: 'projects', label: 'PROJECTS', ref: sectionRefs.projects },
    ];
    return (
        <div className='hidden lg:block'>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.key}
                        onClick={() => handleScrollTo(item.ref)}
                        className='cursor-pointer group flex gap-4'
                    >
                        <span className={`transition-all ease-in-out duration-75 ${activeSection === item.key ? "w-20" : "w-10"} bg-white h-0.5`}> </span>
                        <Typography
                            className={`transition-all ease-in-out duration-75 group-hover:text-cya group-hover:font-bold ${
                                activeSection === item.key
                                    ? 'text-cyan-200 font-extrabold' 
                                    : 'text-slate-200' 
                            }`}
                        >
                            {item.label}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Menu