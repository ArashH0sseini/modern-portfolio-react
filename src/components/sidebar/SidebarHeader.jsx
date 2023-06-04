import styled from "@emotion/styled";
import { Badge, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import AvatarImage from "../../assets/images/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { CustomAvatar } from "../common";
import ThemeActionButton from "../ThemeActionButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: "15px",
    height: "15px",
    backgroundColor: "#44b700",
    color: "#44b700",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
    [theme.breakpoints.up("xl")]: {
      display: "block",
    },
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function SidebarHeader() {
  return (
    <>
      <ThemeActionButton />
      <StyledBadge
        overlap="circular"
        variant="dot"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <CustomAvatar
          avatar={AvatarImage}
          size={200}
          fallback="AH"
          radius={50}
        />
      </StyledBadge>
      <Typography color="text.primary" variant="h6" sx={{ mt: 2 }}>
        آرش حسینی
      </Typography>

      <Typography color="text.secondary" variant="body2">
        <RandomReveal
          isPlaying
          characterSet={alphabetPersian}
          duration={3}
          characters="توسعه دهنده فرانت اند"
        />
      </Typography>
    </>
  );
}

export default SidebarHeader;
