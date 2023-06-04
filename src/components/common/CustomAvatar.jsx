import { Avatar } from "@mui/material";

function CustomAvatar({ avatar, size, fallback,radius }) {
  return (
    <Avatar
      src={avatar}
      sx={{
        height: size,
        width: size,
        borderRadius: radius,
        display: {
          xl: "block",
          lg: "block",
          md: "block",
          sm: "none",
          xs: "none",
        },
      }}
    >
      {fallback}
    </Avatar>
  );
}

export default CustomAvatar;
