import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { type Job } from "../../api/jobs";

export type JobCardsProps = {
  jobs: Job[];
};

export const JobCards = ({ jobs }: JobCardsProps) => (
  <Box component="main">
    <Grid container spacing={3}>
      {jobs.map((job) => (
        <Grid key={job.jdUid} item xs={12} md={6} lg={4}>
          <Card
            sx={{
              padding: "1rem",
              borderRadius: "1.25rem",
              boxShadow: "#00000040 0 1px 0.25rem 0",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "0.5rem",
                }}
              >
                <Avatar
                  variant="square"
                  src={job.logoUrl}
                  alt={job.companyName}
                  sx={{
                    flexShrink: "0",
                    width: "2.5rem",
                    height: "2.5rem",
                    marginRight: "0.5rem",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      color: "#8b8b8b",
                      fontSize: "0.8125rem",
                      fontWeight: "500",
                      marginBottom: "0.125rem",
                    }}
                  >
                    {job.companyName}
                  </Typography>
                  <Typography
                    component="h2"
                    sx={{
                      color: "#000000de",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      textTransform: "capitalize",
                      marginBottom: "0.3125rem",
                    }}
                  >
                    {job.jobRole}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#000000de",
                      fontSize: "0.6875rem",
                      fontWeight: "400",
                      textTransform: "capitalize",
                    }}
                  >
                    {job.location}
                  </Typography>
                </Box>
              </Box>

              <Typography
                component="p"
                sx={{
                  color: "#4d596a",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                Estimated Salary: {job.salaryCurrencyCode}{" "}
                {job.minJdSalary || "0"} - {job.maxJdSalary || "∞"} LPA ✅
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
