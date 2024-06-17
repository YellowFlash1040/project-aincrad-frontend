import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import { GetUpcomingGamesResponse, IThunkAPI } from '../../types';

export const getUpcomingGamesThunk = createAsyncThunk<
  GetUpcomingGamesResponse,
  void,
  IThunkAPI
>('GET /games/upcoming', async (_, thunkAPI) => {
  try {
    const result = await api.games.getUpcoming();
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message || error.message);
    }
  }
});
