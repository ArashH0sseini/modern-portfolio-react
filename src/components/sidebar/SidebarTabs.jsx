import React, { useContext } from "react";
import { Tab, Tabs, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContext from "../../context";
import { tabsData } from "../../constants/tabsData";

function SidebarTabs() {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();

  const theme = useTheme();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      textColor={theme.palette.mode === "dark" ? "primary" : "error"}
      indicatorColor={theme.palette.mode === "dark" ? "primary" : "error"}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          sx={{
            "&.MuiTab-root": {
              background: theme.palette.mode === "dark" ? grey[800] : grey[300],
              borderRadius: 2,
              mt: 2,
              mb: 0.5,
              mx: 2,
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
}

export default SidebarTabs;
