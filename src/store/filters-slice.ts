import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StoreState } from ".";

export type FiltersState = {
  experience: string | null;
  companyName: string;
  location: string;
  mode: string | null;
  role: string;
};

const initialState: FiltersState = {
  experience: null,
  companyName: "",
  location: "",
  mode: null,
  role: "",
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
    setCompanyName: (
      state,
      action: PayloadAction<FiltersState["companyName"]>,
    ) => {
      state.companyName = action.payload;
    },
    setLocation: (state, action: PayloadAction<FiltersState["location"]>) => {
      state.location = action.payload;
    },
    setMode: (state, action: PayloadAction<FiltersState["mode"]>) => {
      state.mode = action.payload;
    },
    setRole: (state, action: PayloadAction<FiltersState["role"]>) => {
      state.role = action.payload;
    },
  },
});

export const { setExperience, setCompanyName, setLocation, setMode, setRole } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state: StoreState) => state.filters;
