import { Box, Grid, Typography } from '@mui/material'
import Menu from './Menu'
import Contact from './Contact'

const Navbar = ({ activeSection, sectionRefs }) => {
    return (
        <Box display={'flex'} flexDirection={"column"} gap={"1rem"} paddingLeft={"3rem"} paddingY={"6rem"}>
            <Typography variant='h3' fontWeight={"bold"}>
                Neelesh Chekuri
            </Typography>
            <Typography variant='h4'>
                Fullstack Engineer
            </Typography>
            <Typography variant='body1'>
                I build useful and robust software products.
            </Typography>
            <Menu activeSection={activeSection} sectionRefs={sectionRefs} />
            <Contact />
        </Box>
    )
}

export default Navbar