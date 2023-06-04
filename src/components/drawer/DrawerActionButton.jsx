import React, { useContext } from "react";
import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { red } from "@mui/material/colors";

import MainContext from '../../context'

function DrawerActionButton() {
const {setDrawerOpen} = useContext(MainContext)
  return (
    <Box
      sx={{
        position:"absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        sx={{
          m: 2,
          backgroundColor: "#ffae00",
          "&:hover": { backgroundColor: "#ffae00"},
        }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
}

export default DrawerActionButton;
