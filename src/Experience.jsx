import StyledCard from "./components/StyledCard.jsx";
import HeaderTypography from "./components/HeaderTypography.jsx";
import {Avatar, Box, Chip, Container, Divider, Link, Stack, Typography, useTheme} from "@mui/material";
import NJIT from "./assets/njit.jpeg"
import CMR from "./assets/custommetal.png"
import TimeRange from "./components/TimeRange.jsx";
const Experience = () => {

    const experiences= [
        {
           company: "New Jersey Institute of Technology",
            img: NJIT,
           title:"Python Course Assistant",
            timeline:"Aug 24' - Dec 24'",
            descriptions: [
                "- Graded assignments and proctored exams."
            ],
        },
        {
            company: "Custom Metal Restoration",
            img: CMR,
            title:"Building Maintenance Technician",
            timeline:"May 24' - Aug 24'",
            descriptions: [
                "- Provided value by doing assigned work efficiently and on time.",
            ],
        },
        {
            company: "New Jersey Institute of Technology",
            img: NJIT,
            title:"Java Course Assistant",
            timeline:"Jan 24' - May 24'",
            descriptions: [
                "- Provided value by helping students understand topics outside of lectures such as OOP and recursion.",
                "- Graded assignments and proctored exams."

            ],
        },
    ]
    const theme = useTheme();

    return (
        <Box  >
            <Stack spacing={1}>
            <HeaderTypography pl={2}>
                Experience
            </HeaderTypography>
                <StyledCard>
                    <Stack divider={<Divider/>} spacing={2}>
                {experiences.map((education,i) => (
                    <Box key={i}>
                        <Stack spacing={2}>
                            <Stack spacing={.5}>
                                <Stack direction={"row"} justifyContent={"space-between"}>
                                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                                        <Avatar src={education.img} variant={"square"}/>
                                        <Stack>
                                            <Typography sx={{fontSize: "1.1rem", fontWeight:"bold"}}>
                                                {education.company}
                                            </Typography>
                                            <Typography sx={{fontSize: "1rem", }}>
                                                {education.title}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <TimeRange time={education.timeline}/>
                            </Stack>
                            <Typography
                                color={theme.palette.text.secondary}
                            >
                                {education.descriptions.map((course,i)=>(
                                    <Typography
                                        color={theme.palette.text.secondary}
                                        key={i}
                                    >
                                        {course}
                                    </Typography>
                                ))}
                            </Typography>
                        </Stack>
                    </Box>
                ))}
                    </Stack>
                </StyledCard>


            </Stack>
        </Box>
    )
}

export default Experience