import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Mainbackground from "../assets/images/bg4.jpeg";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Links } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

function Home({ helmetTitle }) {
  const nameEl = useRef(null);
  const [index, setIndex] = useState(0);

  const strings = [
    "FrontEnd Developer",
    "Creative Mind in UI Design",
    "Guy-who-love-Coffee.tsx",
    "<ButLovesToCodeMore />",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["Arash Hosseini"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
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
          opacity: 0.9,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={Links}
          id="tsparticles"
        />
        <Typography
          ref={nameEl}
          sx={{ zIndex: 10, mb: 4 }}
          variant="h3"
          color="text.primary"
        ></Typography>
        <TextTransition springConfig={presets.molasses}>
          <Typography sx={{ zIndex: 10 }} variant="h4" color="text.primary">
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </>
  );
}

export default Home;
