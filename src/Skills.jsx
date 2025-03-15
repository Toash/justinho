import StyledCard from "./components/StyledCard.jsx";
import {Box, Chip, Divider, Stack, Typography} from "@mui/material";
import HeaderTypography from "./components/HeaderTypography.jsx";

const skills = [
    "React",
    "Javascript",
    "Java",
    "MySQL",
    "AWS",
    "MongoDB",
    "Express.js",
    "Python",
];
const Skills = () => {
    return (
        <StyledCard>
            <Stack spacing={2}>
                <HeaderTypography>Skills</HeaderTypography>
                <Divider />
                <Box display="flex" gap="0.5rem" flexWrap="wrap">
                    {skills.map((skill) => (
                        <Chip key={skill} label={skill} variant="filled" size="small" />
                    ))}
                </Box>
            </Stack>
        </StyledCard>
    )

}

export default Skills