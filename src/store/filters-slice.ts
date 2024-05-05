import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StoreState } from ".";

export type FiltersState = {
  experience: string | null;
};

const initialState: FiltersState = {
  experience: null,
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
  },
});

export const { setExperience } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state: StoreState) => state.filters;
