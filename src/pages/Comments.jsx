import { ForumRounded } from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Mainbackground from "../assets/images/bg5.png";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";

function Comments({ helmetTitle }) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Mainbackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          zIndex: -1,
        }}
      ></Box>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "transparent",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="seccess.main"
            cColor="success"
            icon={<ForumRounded />}
            align="center"
            text="نظرات همکاران"
          />
          <CommentsSlider />
        </CardContent>
      </Card>
    </>
  );
}

export default Comments;
