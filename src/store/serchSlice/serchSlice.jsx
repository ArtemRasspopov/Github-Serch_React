import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "serchSlice/fetchUserById",
  async (value) => {
    const res = await axios.get(`https://api.github.com/users/${value}`);
    return res.data;
  }
);

const initialState = {
  serchStatus: "SHOW__INITIAL", // SHOW__INITIAL | SHOW__NOTFOUND | SHOW__USER | SHOW__LOADER
  user: [],
};

export const serchSlice = createSlice({
  name: "serchSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserById.pending]: (state) => {
      state.serchStatus = "SHOW__LOADER";
      state.user = [];
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.serchStatus = "SHOW__USER";
      state.user = action.payload;
      console.log(action.payload)
    },
    [fetchUserById.rejected]: (state) => {
      state.serchStatus = "SHOW__NOTFOUND";
      state.user = [];
    },
  },
});



export default serchSlice.reducer;
