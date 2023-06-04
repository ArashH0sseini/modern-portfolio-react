import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

function SocialMediaIcons() {
  return (
    <Box conponent="div" sx={{ m: "0 auto", textAlign: "center", mt: 2 }}>
      <IconButton aria-label="Telegram">
        <a
          href="https://github.com/ArashH0sseini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram">
        <a
          href="https://github.com/ArashH0sseini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="WhatsApp">
        <a
          href="https://github.com/ArashH0sseini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/ArashH0sseini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "grey" }} />
        </a>
      </IconButton>
    </Box>
  );
}

export default SocialMediaIcons;
