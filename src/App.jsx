import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Chip,
  CssBaseline,
  Divider,
  Link,
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledCard from "./components/StyledCard.jsx";
import Me from "./Me.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import CustomFade from "./components/CustomFade.jsx";

function App() {

    const theme = createTheme({
                colorSchemes:{
                    dark: {
                        palette:{
                            primary: {
                                main: "#ffffff",
                            },
                            secondary: {
                                main: "#4caf50",
                            },
                        }
                    },
                    light: {
                        palette:{
                            primary: {
                                main: "#000000",
                            },
                            secondary: {
                                main: "#4caf50",
                            },
                        }
                    },
                },
            })

    return (
            // uses system color scheme by default
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container>
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    flexDirection: "row", [theme.breakpoints.down("md")]: {flexDirection:"column" },
                    gap: 3,
                      marginTop: "3rem", [theme.breakpoints.down("md")]:{marginTop:"2rem"}
                  })}
                  flexWrap={"wrap"}
                >
                  <Stack flex="1" spacing={3} minWidth={"250px"}>
                    <Me/>
                    <Skills/>
                  </Stack>
                  <Stack flex="2" spacing={3} minWidth={"250px"} >
                      <About/>
                      <Education/>
                      <Projects/>
                      <Experience/>
                  </Stack>
                </Box>
              </Container>
            </ThemeProvider>
  );
}

export default App;
