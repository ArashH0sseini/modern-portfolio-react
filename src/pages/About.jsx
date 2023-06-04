import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import AvatarImage from "../assets/images/avatar2.jpg";
import { DevInfo, Skills, DevWork } from "../components/pages";
import Mainbackground from "../assets/images/bg2.jpeg";
import { CustomAvatar, CustomDivider } from "../components/common";

function About({ helmetTitle }) {
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
          opacity: 0.3,
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
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8} sx={{ zIndex: 10 }}>
              <CustomDivider
                bColor="primary.main"
                cColor="secondary"
                icon={<CodeRounded />}
                align="right"
                text="توسعه دهنده فرانت اند"
              />
              <Grid container>
                <Grid
                  xs={4}
                  sm={4}
                  md={3}
                  lg={3}
                  sx={{
                    mt: 3,
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}
                >
                  <DevWork />
                </Grid>

                <Grid xs={12} sm={8} md={9} lg={9}>
                  <DevInfo />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <CustomAvatar
                avatar={AvatarImage}
                size={250}
                fallback="AH"
                radius={5}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid sx={{ width: 1, mt: 1, zIndex: 10 }}>
              <CustomDivider
                bColor="secondary.main"
                cColor="secondary"
                icon={<SelfImprovementRounded />}
                align="center"
                text="مهارت های من"
              />

              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default About;
