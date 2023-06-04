import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import ThemeActionButton from "../ThemeActionButton";
import SocialMediaIcons from "./SocialMediaIcons";

function SidebarFooter() {
  return (
    <>
      <SocialMediaIcons />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="subtitle2" color="text.primary">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{
              verticalAlign: "middle",
              color: "tomato",
              height: 20,
            }}
          />
        </Typography>

        <Typography variant="subtitle2" color="text.primary" sx={{ mt: 2 }}>
          کپی رایت 1402{" "}
          <CopyrightRounded
            sx={{
              verticalAlign: "middle",
              height: 16,
            }}
          />
        </Typography>
      </Box>
    </>
  );
}

export default SidebarFooter;
