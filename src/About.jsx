import StyledCard from "./components/StyledCard.jsx";
import { Typography } from "@mui/material";
import HeaderTypography from "./components/HeaderTypography.jsx";

const About = () => {
  return (
    <StyledCard>
      <HeaderTypography>About Me</HeaderTypography>
      <Typography>
        I do software development. Spanning web applications, game development,
        and systems programming.
      </Typography>
    </StyledCard>
  );
};

export default About;
