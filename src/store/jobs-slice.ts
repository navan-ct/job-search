import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type StoreDispatch, type StoreState } from ".";
import { jobsApi, type Job } from "../api/jobs";

export type JobsState = {
  jobs: Job[];
  isLoading: boolean;
  totalCount: number;
  previousOffset: number | null;
};

const initialState: JobsState = {
  jobs: [],
  isLoading: false,
  totalCount: 0,
  previousOffset: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    appendJobs: (state, action: PayloadAction<JobsState["jobs"]>) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<JobsState["isLoading"]>) => {
      state.isLoading = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<JobsState["totalCount"]>) => {
      state.totalCount = action.payload;
    },
    setPreviousOffset: (
      state,
      action: PayloadAction<JobsState["previousOffset"]>,
    ) => {
      state.previousOffset = action.payload;
    },
  },
});

export const { appendJobs, setIsLoading, setTotalCount, setPreviousOffset } =
  jobsSlice.actions;

export const fetchJobs =
  () => async (dispatch: StoreDispatch, getState: () => StoreState) => {
    try {
      const { jobs } = getState();
      const offset = jobs.jobs.length;

      if (
        (jobs.totalCount && offset >= jobs.totalCount) ||
        jobs.isLoading ||
        offset === jobs.previousOffset
      ) {
        return;
      }

      dispatch(setIsLoading(true));
      const response = await jobsApi.fetchAll(offset);
      dispatch(setPreviousOffset(offset));
      dispatch(appendJobs(response.jdList));
      dispatch(setTotalCount(response.totalCount));
    } catch (error) {
      console.error(error);
    }
    dispatch(setIsLoading(false));
  };

export const jobsReducer = jobsSlice.reducer;
export const selectJobs = (state: StoreState) => state.jobs;
