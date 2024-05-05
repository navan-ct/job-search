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
  const { experience } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        if (experience && job.minExp && Number(experience) < job.minExp) {
          return false;
        }
        return true;
      }),
    [jobs, experience],
  );

  return (
    <Container sx={{ paddingTop: "1.5rem" }}>
      <Filters sx={{ marginBottom: "3rem" }} />
      <JobCards jobs={filteredJobs} />
    </Container>
  );
};
