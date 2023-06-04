import { Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Skill({ value, name, icon, color }) {
  return (
    <Box sx={{ width: "70%", mx: "auto" }}>
      <Divider
        textAlign="right"
        sx={{
          "&::before,&::after": {
            borderColor: `${color}.main`,
          },
          mt: 4,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{ color: "#000", p: 3 }}
        ></Chip>
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="text.primary">
            {Math.round(value)}%
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{
              height: 10,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
