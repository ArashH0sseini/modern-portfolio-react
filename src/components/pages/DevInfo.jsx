import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

function Info({ children }) {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2, fontWeight: "bold" }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
}

function DevInfo() {
  return (
    <>
      <Info>آرش حسینی</Info>
      <Info>arashhosseini : لینکدین</Info>
      <Info>شماره تماس : 09103753764</Info>
      <Info>info.arashhosseini@gmail.com : ایمیل</Info>
    </>
  );
}

export default DevInfo;
