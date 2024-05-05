import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filters-slice";
import { jobsReducer } from "./jobs-slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    jobs: jobsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
