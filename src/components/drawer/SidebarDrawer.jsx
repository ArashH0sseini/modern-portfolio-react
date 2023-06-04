import { Drawer } from "@mui/material";
import React, { useContext } from "react";
import { SidebarContent } from "../sidebar";

import MainContext from "../../context";

function SidebarDrawer() {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          backgroundColor: "#000000",
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
}

export default SidebarDrawer;
