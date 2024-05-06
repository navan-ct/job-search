import { Container } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { useDispatch, useSelector } from "../../hooks/redux";
import { selectFilters } from "../../store/filters-slice";
import { fetchJobs, selectJobs } from "../../store/jobs-slice";
import { Filters } from "./filters";
import { JobCards } from "./job-cards";

export const Home = () => {
  const observer = useRef<IntersectionObserver>();

  const dispatch = useDispatch();
  const { jobs } = useSelector(selectJobs);
  const { experience, companyName, location, mode, role } =
    useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const lastJobCardRef = useCallback(
    (element: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) dispatch(fetchJobs());
        },
        { threshold: 0.8 },
      );

      if (element) observer.current.observe(element);
    },
    [dispatch],
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (experience && job.minExp && Number(experience) < job.minExp) {
        return false;
      }

      if (
        companyName &&
        job.companyName &&
        !job.companyName.toLowerCase().includes(companyName.toLowerCase())
      ) {
        return false;
      }

      if (
        location &&
        job.location &&
        !job.location.toLowerCase().includes(location.toLowerCase())
      ) {
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

      if (
        role &&
        job.jobRole &&
        !job.jobRole.toLowerCase().includes(role.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [jobs, experience, companyName, location, mode, role]);

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
      <JobCards jobs={filteredJobs} lastCardRef={lastJobCardRef} />
    </Container>
  );
};
