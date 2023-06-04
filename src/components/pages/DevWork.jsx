import React from "react";
import { Box, Chip, Tooltip, Typography } from "@mui/material";
import { devWorks } from "../../constants/details";
import CountUp from "react-countup";

function DevWork() {
  return (
    <>
      {devWorks.map((item, index) => (
        <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
          <Tooltip title={item.tooltipTitle} placement="right" arrow>
            <Chip
              icon={item.icon}
              label={
                <Typography variant="body1" color="text.primary">
                  <CountUp start={0} end={item.total} duration={2} />
                </Typography>
              }
              sx={{
                p: 2,
                backgroundColor: item.color,
                width: 1,
              }}
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
}

export default DevWork;
