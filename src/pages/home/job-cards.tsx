import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import { type Job } from "../../api/jobs";
import { PrimaryButton } from "../../components";
import { useSelector } from "../../hooks/redux";
import { selectJobs } from "../../store/jobs-slice";

export type JobCardsProps = {
  jobs: Job[];
  lastCardRef: (element: HTMLDivElement) => void;
};

export const JobCards = ({ jobs, lastCardRef }: JobCardsProps) => {
  const { isLoading } = useSelector(selectJobs);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={4}>
        {jobs.map((job, index) => (
          <Grid
            key={job.jdUid}
            item
            xs={12}
            md={6}
            lg={4}
            ref={index === jobs.length - 1 ? lastCardRef : undefined}
          >
            <Card
              sx={{
                padding: "1.3125rem 1.3125rem 0.625rem 1.3125rem",
                borderRadius: "1.25rem",
                boxShadow: "#00000040 0 1px 0.25rem 0",
                transition: "all 200ms ease-in-out",
                ":hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 !important",
                }}
              >
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
                  {job.minJdSalary || "0"} - {job.maxJdSalary || "∞"} LPA
                </Typography>

                <Box
                  sx={{
                    height: "15.625rem",
                    overflow: "hidden",
                    marginBottom: "0.625rem",
                    position: "relative",
                  }}
                >
                  <Typography
                    component="h4"
                    sx={{
                      color: "#000000de",
                      fontSize: "1rem",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    About Role:
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "#000000de",
                      fontSize: "0.875rem",
                    }}
                  >
                    {job.jobDetailsFromCompany}
                  </Typography>

                  <Box
                    sx={{
                      background:
                        "linear-gradient(#ffffff00 50%, #ffffff99 70%, #fff)",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: "0",
                      left: "0",
                    }}
                  />

                  <Button
                    disableRipple
                    sx={{
                      backgroundColor: "transparent !important",
                      color: "#4943da",
                      fontSize: "0.875rem",
                      fontWeight: "300",
                      lineHeight: "1.5rem",
                      textTransform: "none",
                      position: "absolute",
                      bottom: "0.5rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    Show more
                  </Button>
                </Box>

                <Typography
                  component="h4"
                  sx={{
                    color: "#8b8b8b",
                    fontSize: "0.8125rem",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    marginBottom: "0.1875rem",
                  }}
                >
                  Minimum Experience
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "#000000de",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    marginBottom: "0.8125rem",
                  }}
                >
                  {job.minExp
                    ? `${job.minExp} year${job.minExp > 1 ? "s" : ""}`
                    : "N/A"}
                </Typography>

                <Box
                  sx={{
                    flexGrow: "1",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <PrimaryButton>⚡ Easy Apply</PrimaryButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {isLoading ? (
        <CircularProgress
          sx={{
            alignSelf: "center",
            marginTop: "1.25rem",
          }}
        />
      ) : null}
    </Box>
  );
};
