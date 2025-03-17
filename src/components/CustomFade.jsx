import { useState, useEffect } from "react";
import {Fade, Box, Typography} from "@mui/material";

const FadeInComponent = ({children}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Fade in={visible} timeout={2500}  >
        {children}
    </Fade>
  );
};

export default FadeInComponent;
