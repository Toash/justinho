import StyledCard from "./components/StyledCard.jsx";
import {Box, Button, Divider, IconButton, Link, Stack, Typography, useColorScheme, useTheme} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderTypography from "./components/HeaderTypography.jsx";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Me = () => {
    const { mode, setMode } = useColorScheme();
    const theme = useTheme()
    if (!mode) {
        return null;
    }
    return (

        <StyledCard>
            <Stack spacing={2}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack>
                       <HeaderTypography>
                            Justin Ho
                       </HeaderTypography>
                        <Typography fontWeight={"bold"}>Fullstack Developer</Typography>
                    </Stack>
                    <IconButton onClick={() => {
                        console.log(mode)
                         setMode(mode==="light"?"dark":"light")
                    }}>

                        <DarkModeIcon/>
                    </IconButton>
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
                        <Link
                            display= "flex"
                            alignItems= "center"
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
                    <Box
                    >
                        <Link
                            display= "flex"
                            alignItems= "center"
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

                </Stack>

            </Stack>
        </StyledCard>
    )
}

export default Me;