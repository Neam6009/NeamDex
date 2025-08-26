import { Grid, Typography } from "@mui/material"
import TechStackButton from "./TechStackButton"

const Project = ({title,description,img,techStack}) => {
  return (
    <div className="p-4 rounded-sm hover:bg-white/10 backdrop-blur-lgborder border-white/20 hover:text-cyan-200">
            <Grid container spacing={1}>
                <Grid size={5}>
                    <img className="max-h-20" src={img}/>
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

export default Project