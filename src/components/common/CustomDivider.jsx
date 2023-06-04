import { Chip, Divider, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function CustomDivider({ bColor, cColor, icon, align, text }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Slide
      direction="down"
      in={loading}
      style={{
        transitionDelay: loading ? "200ms" : "0ms",
      }}
    >
      <Divider
        textAlign={align}
        sx={{
          "&::before, &::after": {
            borderColor: { bColor },
          },
          mb: 3,
        }}
      >
        <Chip
          color={cColor}
          icon={icon}
          label={
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ textAlign: { align } }}
            >
              {text}
            </Typography>
          }
          sx={{ p: 3 }}
        />
      </Divider>
    </Slide>
  );
}

export default CustomDivider;
