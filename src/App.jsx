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
                    }
                },
            })

    return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    gap: 3,
                    marginTop: { xs: "2rem", sm: "2rem", md: "4rem" },
                  }}
                  flexWrap={"wrap"}
                >
                  <Stack flex="1" spacing={3} minWidth={"300px"}>
                    <Me/>
                    <Skills/>
                  </Stack>
                  <Stack flex="2" spacing={3}>
                    <About/>
                      <Projects/>
                      <Education/>
                  </Stack>
                </Box>
              </Container>
            </ThemeProvider>
  );
}

export default App;
