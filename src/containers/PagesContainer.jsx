import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function PagesContainer({ children }) {
  const theme = useTheme();

  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={10}
      sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[900]: grey[100] }}
    >
      {children}
    </Grid>
  );
}

export default PagesContainer;
