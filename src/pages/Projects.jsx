import { SchoolRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import Mainbackground from "../assets/images/bg7.jpeg";
import { CustomDivider } from "../components/common";
import { ShowProjects } from "../components/pages";

function Projects({ helmetTitle }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
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
          overflowY: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="primary.main"
            cColor="primary"
            icon={<SchoolRounded />}
            align="center"
            text="دوره های من"
          />
          <Grid container sx={{ mx: 3 }}>
            <ShowProjects loading={loading} />
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Projects;
