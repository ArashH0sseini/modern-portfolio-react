import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Slide,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { AccountCircle } from "@mui/icons-material";
import worldMap from "../assets/images/map.svg";
import { ContactForm } from "../components/pages";

function Contact({ helmetTitle }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
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
        <Slide
          direction="down"
          in={loading}
          style={{
            transitionDelay: loading ? "200ms" : "0ms",
          }}
        >
          <Divider
            textAlign="center"
            sx={{
              "&::before, &::after": {
                borderColor: "warning.main",
              },
              mb: 3,
            }}
          >
            <Chip
              color="warning"
              icon={<AccountCircle />}
              label={
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ textAlign: "center" }}
                >
                  ارتباط با من
                </Typography>
              }
              sx={{ p: 3 }}
            />
          </Divider>
        </Slide>
        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="down"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid xs={12} sm={12} md={8}>
              <Card sx={{ justifyContent: "center", alignItem: "ccenter" }}>
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="down"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:work.arashhosseini@gmail.com"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Contact;
