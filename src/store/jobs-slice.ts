import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type StoreDispatch, type StoreState } from ".";
import { jobsApi, type Job } from "../api/jobs";

export type JobsState = {
  jobs: Job[];
  totalCount: number;
};

const initialState: JobsState = {
  jobs: [],
  totalCount: 0,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<JobsState["jobs"]>) => {
      state.jobs = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<JobsState["totalCount"]>) => {
      state.totalCount = action.payload;
    },
  },
});

export const { setJobs, setTotalCount } = jobsSlice.actions;

export const fetchJobs = () => async (dispatch: StoreDispatch) => {
  try {
    const response = await jobsApi.fetchAll();
    dispatch(setJobs(response.jdList));
    dispatch(setTotalCount(response.totalCount));
  } catch (error) {
    console.error(error);
  }
};

export const jobsReducer = jobsSlice.reducer;
export const selectJobs = (state: StoreState) => state.jobs;
