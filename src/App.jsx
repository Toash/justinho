import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  Paper,
  Typography,
  Stack,
  Chip,
  CssBaseline,
  Divider,
  SvgIcon,
  Link,
} from "@mui/material";
import { useState } from "react";
import { makeStyles, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const skills = [
  "React",
  "Javascript",
  "Python",
  "MySQL",
  "MongoDB",
  "Express.js",
];

function App() {
  const styles = {
    big: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box display="flex" gap="2rem" marginTop="2rem" flexWrap={"wrap"}>
          <Stack flex={1} spacing={2}>
            <Paper sx={{ padding: 2 }}>
              <Container>
                <Stack spacing={2}>
                  <Stack>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      Justin Ho
                    </Typography>
                    <Typography>Fullstack Developer</Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    component={Link}
                    href="mailto:justinho016@gmail.com"
                  >
                    Contact me
                  </Button>
                  <Divider />
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <GitHubIcon fontSize="small"></GitHubIcon>
                      <Link
                        href="https://www.github.com/Toash"
                        underline="none"
                        sx={{
                          color: theme.palette.text.secondary,
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        /Toash
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <LinkedInIcon fontSize="small"></LinkedInIcon>
                      <Link
                        href="https://www.linkedin.com/in/justin-ho-3494b1259/"
                        underline="none"
                        sx={{
                          color: theme.palette.text.secondary,
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        /justin-ho-3494b1259
                      </Link>
                    </Box>
                  </Stack>
                </Stack>
              </Container>
            </Paper>
            <Paper sx={{ padding: 2 }}>
              <Container>
                <Stack spacing={2}>
                  <Typography sx={{ ...styles.big }}>Skills</Typography>
                  <Box display="flex" gap="0.5rem" flexWrap="wrap">
                    {skills.map((skill) => (
                      <Chip label={skill} variant="filled" size="small" />
                    ))}
                  </Box>
                </Stack>
              </Container>
            </Paper>
          </Stack>
          <Stack flex={2} spacing={2}>
            <Paper sx={{ padding: 2 }}>
              <Container>
                <Typography sx={{ ...styles.big }}>About Me</Typography>
                <Typography>
                  I am a software engineer with a passion for building web
                  applications.
                </Typography>
              </Container>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
