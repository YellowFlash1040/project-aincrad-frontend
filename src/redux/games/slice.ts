import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getUpcomingGamesThunk } from './operations';
import { IGamesState } from '../../types';
import { upcomingGames } from '../../constants';

const initialState: IGamesState = {
  upcomingGames: upcomingGames,
  isLoading: false
};

const slice = createSlice({
  name: 'games',
  initialState,
  /* reducers: {
    setActiveEvent: (state, { payload }) => {
      const event = state.events.find((event) => event._id === payload);
      if (event) {
        state.activeEvent = event;
      }
    }
  }, */
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUpcomingGamesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.upcomingGames = payload;
      })
      .addMatcher(isAnyOf(getUpcomingGamesThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getUpcomingGamesThunk.rejected), (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectUpcomingGames: (state) => state.upcomingGames,
    selectIsLoadingGames: (state) => state.isLoading
  }
});

export const gamesReducer = slice.reducer;

export const { selectIsLoadingGames, selectUpcomingGames } = slice.selectors;

// export const { setActiveEvent } = slice.actions;
