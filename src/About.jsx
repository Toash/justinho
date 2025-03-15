import StyledCard from "./components/StyledCard.jsx";
import {Typography} from "@mui/material";
import HeaderTypography from "./components/HeaderTypography.jsx";

const About = () => {

    return (

        <StyledCard>
            <HeaderTypography>About Me</HeaderTypography>
            <Typography>
                I am a software engineer with a passion for building web
                applications.
            </Typography>
        </StyledCard>
    )
}

export default About