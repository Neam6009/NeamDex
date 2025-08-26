import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Box container display={'flex'} justifyContent={'left'} maxWidth={"20rem"} gap={"1rem"}>
            <a href='https://github.com/Neam6009' target='_blank'><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/neelesh-chekuri/' target='_blank'><LinkedInIcon /></a>
            <a href='mailto:Neelesh3003@protonmail.com'><EmailIcon /></a>
        </Box>
    )
}

export default Contact