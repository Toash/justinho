import StyledCard from "./components/StyledCard.jsx";
import HeaderTypography from "./components/HeaderTypography.jsx";
import {Avatar, Box, Chip, Container, Divider, Link, Stack, Typography, useTheme} from "@mui/material";
import NJIT from "./assets/njit.jpeg"
import TimeRange from "./components/TimeRange.jsx";
const Education = () => {

    const educations= [
        {
           title: "New Jersey Institute of Technology",
           degree:"Computer Science, B.S.",
            timeline:"Aug 22' - May 26'",
            gpa:"3.8",
            courses: [
                "CS490: Guided Design in Software Engineering",
                "IT302: Advanced Internet Applications",
                "CS288: Intensive Programming in Linux",
            ],
        },
    ]
    const theme = useTheme();

    return (
        <Box  >
            <Stack spacing={1}>
            <HeaderTypography pl={2}>
               Education
            </HeaderTypography>
                <StyledCard>
                    <Stack divider={<Divider/>} spacing={2}>
                {educations.map((education) => (
                    <>
                        <Stack spacing={2}>
                            <Stack spacing={.5}>
                                <Stack direction={"row"} justifyContent={"space-between"}>
                                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                                        <Avatar src={NJIT} variant={"square"}/>
                                        <Stack>
                                            <Typography sx={{fontSize: "1.1rem", fontWeight:"bold"}}>
                                                {education.title}
                                            </Typography>
                                            <Typography sx={{fontSize: "1rem", }}>
                                                {education.degree}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Typography sx={{fontWeight:"bold"}}>
                                        GPA: {education.gpa}
                                    </Typography>
                                </Stack>
                                <TimeRange time={education.timeline}/>
                            </Stack>
                            <Typography
                                color={theme.palette.text.secondary}
                            >
                                Notable courses:
                                {education.courses.map((course)=>(
                                    <Typography
                                        color={theme.palette.text.secondary}
                                    >
                                        {course}
                                    </Typography>
                                ))}
                            </Typography>
                        </Stack>
                    </>
                ))}
                    </Stack>
                </StyledCard>


            </Stack>
        </Box>
    )
}

export default Education