import React from "react";
import { projects } from "../../constants/projects";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography } from "@mui/material";

function ShowProjects({loading}) {
  return (
    <>
      {projects.map((project, index) => (
        <Grid
          key={index}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          sx={{ px: 2, mb: 4, zIndex: 10 }}
        >
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 445,
                backgroundColor: `${project.color}`,
                p: 2,
                borderRadius: 10,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={project.image}
                  height="230"
                  width="200"
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                  >
                    {project.info}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={project.link}
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  مشاهد پروژه
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
}

export default ShowProjects;
