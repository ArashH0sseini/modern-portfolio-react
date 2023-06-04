import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarTabs, SidebarFooter } from ".";

function SidebarContent() {

  return (
    <Box sx={{ mt: 2, textAlign: "center", justifyContent: "center" }}>
      <SidebarHeader />
      <Divider
        variant="middle"
        sx={{ mt: 2 }}
      />
      <SidebarTabs />
      <Divider
        variant="middle"
        sx={{ mt: 2 }}
      />
      <SidebarFooter />
    </Box>
  );
}

export default SidebarContent;
