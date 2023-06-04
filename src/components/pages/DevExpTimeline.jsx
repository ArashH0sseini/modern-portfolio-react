import { SchoolRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/details";

function DevExpTimeline({loading}) {
  return (
    <Timeline position="alternate" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                {item.year}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                {item.cert}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                {item.major}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ mt: 1, fontWeight: "bold" }}
              >
                {item.univercity}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
}

export default DevExpTimeline;
