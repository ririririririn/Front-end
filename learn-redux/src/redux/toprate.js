/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopRated } from "../components/TopRated";

export const fetchTop = createAsyncThunk("toprated/fetchTop", getTopRated);

const topSlice = createSlice({
  name: "toprated",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop.fulfilled, (state, action) => {
        state = action.payload;
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTop.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state = action.payload;
      })
      .addCase(fetchTop.pending, (state, action) => {
        state.data = [];
        state.error = null;
        state.isLoading = true;
      });
  },
});

console.log(topSlice);

export default topSlice.reducer;
 */
