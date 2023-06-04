import {
  SettingsEthernetRounded,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import Mainbackground from "../assets/images/bg3.jpeg";
import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

function Resume({ helmetTitle }) {
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
          opacity: 0.3,
          zIndex: -1,
        }}
      ></Box>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "transparent",
          overflowY: "scroll",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="error.main"
            cColor="error"
            icon={<SettingsEthernetRounded />}
            align="center"
            text="رزومه من"
          />
          <Grid container sx={{ mt: 4 }}>
            <Grid xs={12} lg={6}>
              <CustomDivider
                bColor="info.main"
                cColor="info"
                icon={<SettingsEthernetRounded />}
                align="center"
                text="تحصیلات"
              />
             <DevExpTimeline loading={loading} />
            </Grid>
            <Grid xs={12} lg={6}>
              <CustomDivider
                bColor="warning.main"
                cColor="warning"
                icon={<SettingsEthernetRounded />}
                align="center"
                text="تجربیات"
              />
              <DevEduTimeline loading={loading} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Resume;
