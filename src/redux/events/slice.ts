import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getAllEventsThunk, getEventByIdThunk } from "./operations";
import { IEventsState } from "../../types";

const initialState: IEventsState = {
  events: [],
  isLoading: false,
  activeEvent: null,
};

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setActiveEvent: (state, { payload }) => {
      const event = state.events.find((event) => event._id === payload);
      if (event) {
        state.activeEvent = event;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEventsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.events = payload;
      })
      .addCase(getEventByIdThunk.fulfilled, (state, { payload }) => {
        state.activeEvent = payload;
      })
      .addMatcher(isAnyOf(getAllEventsThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getAllEventsThunk.rejected), (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectEvents: (state) => state.events,
    selectIsLoadingEvents: (state) => state.isLoading,
    selectActiveEvent: (state) => state.activeEvent,
  },
});

export const eventsReducer = slice.reducer;

export const { selectEvents, selectIsLoadingEvents, selectActiveEvent } =
  slice.selectors;

export const { setActiveEvent } = slice.actions;
