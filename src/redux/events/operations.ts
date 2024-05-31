import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import api from "../../api";
import {
  GetAllEventsPayload,
  GetEventByIdPayload,
  IThunkAPI,
  Id,
} from "../../types";

export const getAllEventsThunk = createAsyncThunk<
  GetAllEventsPayload,
  void,
  IThunkAPI
>("GET /events", async (_, thunkAPI) => {
  try {
    const result = await api.events.getAll();
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const getEventByIdThunk = createAsyncThunk<
  GetEventByIdPayload,
  Id,
  IThunkAPI
>("GET /events/:id", async (id, thunkAPI) => {
  try {
    const result = await api.events.getById(id);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});
