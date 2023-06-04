import React from "react";
import { userComments } from "../../constants/details";
import Slider from "react-slick";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

function CommentsSlider() {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <Box
      component="div"
      sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
    >
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box key={index} component="div" sz={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="circular"
              sx={{ height: 100, width: 100, margin: "0 auto" }}
            />
            <Typography variant="body1" textAlign="center" color="text.primary">
              {user.fullname}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color="text.primary"
              sx={{ mb: 2 }}
            >
              {user.jobTitle}
            </Typography>
            <Card
              dir="rtl"
              sx={{
                backgroundColor: "lightsalmon",
                width: { xs: 1, md: 1 / 2 },
                m: "0 auto",
                borderRadius: 5,
                textAlign: "justify",
              }}
            >
              <CardContent>
                <Typography>{user.comment}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CommentsSlider;
