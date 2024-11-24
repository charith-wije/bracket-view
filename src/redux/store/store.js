import {configureStore} from '@reduxjs/toolkit';
import bracketsSlice from '../reducers/bracketsReducer';

export const store = configureStore({
  reducer: {
    brackets: bracketsSlice,
  },
});
