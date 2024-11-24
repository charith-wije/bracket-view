import {createSlice} from '@reduxjs/toolkit';
import {getBrackets} from '../actions/bracketsAction';

const initialState = {
  brackets: [],
  isLoading: false,
  error: null,
};

export const bracketsSlice = createSlice({
  name: 'fixtures',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBrackets.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBrackets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brackets = action.payload;
    });
    builder.addCase(getBrackets.rejected, (state, action) => {
      state.error = 'Server error';
    });
  },
});

export default bracketsSlice.reducer;
