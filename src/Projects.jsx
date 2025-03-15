import StyledCard from "./components/StyledCard.jsx";
import HeaderTypography from "./components/HeaderTypography.jsx";
import {Box, Chip, Container, Divider, Link, Stack, Typography, useTheme} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Projects = () => {

    const projects= [
        {
           title: "Current Project - Health Clinic",
            descriptions:["Fullstack app for patient doctor management, health tracking, and prescription handling ",
                "- Learning Spring Boot JPA by creating endpoints and connecting to the frontend."],
            skills: [
                "React",
                "Spring Boot"
            ],
            link: "https://github.com/Toash/Clinic"
        },
        {
            title: "Boulderstat",
            descriptions:["Store videos of climbs and chart progress over time."],
            skills: [
                "React",
                "Express",
                "MongoDB",
                "AWS",
            ],
            link: "https://github.com/Toash/ClimbingApp"
        },
    ]
    const theme = useTheme();

    return (
        <Box  >
            <Stack spacing={1}>
            <HeaderTypography pl={2}>
                Projects
            </HeaderTypography>
                <StyledCard>
                    <Stack divider={<Divider/>} spacing={2}>
                {projects.map((project,i) => (
                    <Box key={i}>
                        <Stack spacing={2}>
                            <Box>
                            <Typography sx={{fontSize: "1.1rem", fontWeight:"bold"}}>
                                {project.title}
                            </Typography>
                                { project.descriptions.map((description,i) => (
                                    <Typography key={i} color={theme.palette.text.secondary}>
                                    {description}
                                    </Typography>
                                ))}

                            </Box>
                            <Stack direction={"row"} justifyContent={"space-between"}>
                                <Stack direction={"row"} spacing={1}>
                                    {project.skills.map((skill,i) => (
                                        <Chip key={i} label={skill} size={"small"}/>
                                    ))}
                                </Stack>
                                    <Link display="flex" alignItems={"center"} gap={".25rem"} target={"_blank"} href={project.link}>
                                        <OpenInNewIcon fontSize={"inherit"}/>
                                        View Project
                                    </Link>

                            </Stack>
                        </Stack>
                    </Box>
                ))}
                    </Stack>
                </StyledCard>
            </Stack>
        </Box>
    )
}

export default Projects