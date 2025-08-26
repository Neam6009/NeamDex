import { Button, Grid, Typography } from '@mui/material'
import TechStackButton from './TechStackButton'

const Experience = ({ period, title, description,techStack }) => {
    return (
        <div className="p-4 rounded-sm hover:bg-white/10 backdrop-blur-lgborder border-white/20 hover:text-cyan-200">
            <Grid container spacing={1}>
                <Grid size={5}>
                    <Typography className="text-gray-300">{period}</Typography>
                </Grid>
                <Grid container size={7}>
                    <Typography fontWeight={"bold"}  alignContent={'center'}>{title}</Typography>
                    <Grid size={12} className="text-gray-300">{description}</Grid>
                    <Grid size={12}  display={'flex'} flexWrap={'wrap'} gap={1} paddingY={"1rem"}>
                        {techStack.map(t=>
                        <TechStackButton tech={t}/>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experience