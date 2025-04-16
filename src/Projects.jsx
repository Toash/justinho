import StyledCard from "./components/StyledCard.jsx";
import HeaderTypography from "./components/HeaderTypography.jsx";
import {Box, Chip, Container, Divider, Link, Stack, Typography, useTheme} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Projects = () => {

    const projects= [
        {
           title: "X86 Code Generator",
            descriptions:["Generating x86 for cool programs",
                ],
            skills: [
                "Python",
            ],
            link: "https://github.com/Toash/cool-code-generator"
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
                            <Stack sx={(theme)=>({
                                flexDirection: "column",
                                [theme.breakpoints.up("md")]: {
                                    flexDirection:"row"
                                }
                            })} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
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