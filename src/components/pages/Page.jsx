import { Box } from "@mui/material";
import React from "react";

function Page({ children, pageNumber, index, ...others }) {
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ height: "100vh", overflow:"hidden" }}>{children}</Box>}
    </div>
  );
}

export default Page;
