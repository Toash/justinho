import StyledCard from "./components/StyledCard.jsx";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HeaderTypography from "./components/HeaderTypography.jsx";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Me = () => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  if (!mode) {
    return null;
  }
  return (
    <StyledCard>
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack>
            <Typography fontSize={"2rem"} fontWeight={"bold"} component={"h1"}>
              Justin Ho
            </Typography>
            <Typography fontWeight={"bold"}>Software Developer</Typography>
          </Stack>
          <IconButton
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Stack>
        <Button
          variant="contained"
          component={Link}
          href="Resume_Justin_Ho.pdf"
          download="Resume_Justin_Ho.pdf"
        >
          Resume
        </Button>
        <Button
          variant="contained"
          component={Link}
          href="mailto:justinho016@gmail.com"
        >
          Contact me
        </Button>
        <Divider />
        <Stack spacing={2}>
          <Link
            display="flex"
            alignItems="center"
            gap={".25rem"}
            href="https://www.github.com/Toash"
            underline="none"
            sx={{
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            target={"_blank"}
          >
            <GitHubIcon fontSize="inherit"></GitHubIcon>
            /Toash
          </Link>
          <Box>
            <Link
              display="flex"
              alignItems="center"
              gap={".25rem"}
              href="https://www.linkedin.com/in/justin-ho-3494b1259/"
              underline="none"
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              target={"_blank"}
            >
              <LinkedInIcon fontSize="inherit"></LinkedInIcon>
              /justin-ho-3494b1259
            </Link>
          </Box>
          <Box>
            <Link
              display="flex"
              alignItems="center"
              gap={".25rem"}
              href="https://toash.itch.io/"
              underline="none"
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              target={"_blank"}
            >
              <SportsEsportsIcon fontSize="inherit"></SportsEsportsIcon>
              /Video Games! (itch.io)
            </Link>
          </Box>
        </Stack>
      </Stack>
    </StyledCard>
  );
};

export default Me;
