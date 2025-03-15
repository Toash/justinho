import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Typography, useTheme} from "@mui/material";
const TimeRange = ({time}) => {
    const theme = useTheme()
    return (
        <Typography color={theme.palette.text.secondary} display="flex" gap={".25rem"} alignItems={"center"} fontSize={".9rem"}> <CalendarMonthIcon fontSize={"inherit"}/> {time}</Typography>
    )

}

export default TimeRange;