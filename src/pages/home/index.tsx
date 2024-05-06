import { Container } from "@mui/material";
import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "../../hooks/redux";
import { selectFilters } from "../../store/filters-slice";
import { fetchJobs, selectJobs } from "../../store/jobs-slice";
import { Filters } from "./filters";
import { JobCards } from "./job-cards";

export const Home = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector(selectJobs);
  const { experience, mode } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (experience && job.minExp && Number(experience) < job.minExp) {
        return false;
      }

      if (
        mode &&
        job.location &&
        ((mode === "Remote" && job.location.toLowerCase() !== "remote") ||
          (mode !== "Remote" && job.location.toLowerCase() == "remote"))
      ) {
        return false;
      }

      return true;
    });
  }, [jobs, experience, mode]);

  return (
    <Container sx={{ padding: "1.5rem 0 3rem 0" }}>
      <Filters
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "0.3125rem",
          marginBottom: "3rem",
        }}
      />
      <JobCards jobs={filteredJobs} />
    </Container>
  );
};
