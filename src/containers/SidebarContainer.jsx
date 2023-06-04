import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import React from "react";
import { useTheme } from "@mui/material";

function SidebarContainer({ children }) {
  const theme = useTheme();
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[100],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Grid>
  );
}

export default SidebarContainer;
