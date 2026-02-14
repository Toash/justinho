import StyledCard from "./components/StyledCard.jsx";
import HeaderTypography from "./components/HeaderTypography.jsx";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NJIT from "./assets/njit.jpeg";
import CMR from "./assets/custommetal.png";
import Rockliffe from "./assets/rockliffe_logo.jpeg";
import TimeRange from "./components/TimeRange.jsx";
const Experience = () => {
  const experiences = [
    {
      company: "Rockliffe",
      img: Rockliffe,
      title: "Software Engineer Intern",
      timeline: "December 2025 - February 2026",
      descriptions: [
        "- Identified and redesigned the existing payment flow to route card data directly to Authorize.Net, reducing PCI scope by elimating backend handling of CVV and raw card data.",
        "- Refactored order management logic and data models to remove ambiguous duration fields and enable deterministic pricing and manual order renewals.",
      ],
    },
    {
      company: "New Jersey Institute of Technology",
      img: NJIT,
      title: "Python Course Assistant",
      timeline: "Aug 24' - Dec 24'",
      descriptions: ["- Graded assignments and proctored exams."],
    },
    {
      company: "New Jersey Institute of Technology",
      img: NJIT,
      title: "Java Course Assistant",
      timeline: "Jan 24' - May 24'",
      descriptions: [
        "- Provided value by helping students understand topics outside of lectures such as OOP and recursion.",
        "- Graded assignments and proctored exams.",
      ],
    },
  ];
  const theme = useTheme();

  return (
    <Box>
      <Stack spacing={1}>
        <HeaderTypography pl={2}>Experience</HeaderTypography>
        <StyledCard>
          <Stack divider={<Divider />} spacing={2}>
            {experiences.map((education, i) => (
              <Box key={i}>
                <Stack spacing={2}>
                  <Stack spacing={0.5}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Stack direction={"row"} gap={2} alignItems={"center"}>
                        <Avatar src={education.img} variant={"square"} />
                        <Stack>
                          <Typography
                            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                          >
                            {education.company}
                          </Typography>
                          <Typography sx={{ fontSize: "1rem" }}>
                            {education.title}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <TimeRange time={education.timeline} />
                  </Stack>
                  <Typography color={theme.palette.text.secondary}>
                    {education.descriptions.map((course, i) => (
                      <Typography color={theme.palette.text.secondary} key={i}>
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
  );
};

export default Experience;
