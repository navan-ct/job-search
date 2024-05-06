import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StoreState } from ".";

export type FiltersState = {
  experience: string | null;
  mode: string | null;
};

const initialState: FiltersState = {
  experience: null,
  mode: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setExperience: (
      state,
      action: PayloadAction<FiltersState["experience"]>,
    ) => {
      state.experience = action.payload;
    },
    setMode: (state, action: PayloadAction<FiltersState["mode"]>) => {
      state.mode = action.payload;
    },
  },
});

export const { setExperience, setMode } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state: StoreState) => state.filters;
