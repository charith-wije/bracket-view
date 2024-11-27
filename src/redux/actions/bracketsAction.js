import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../../constants/constants.js';

export const getBrackets = createAsyncThunk('getBrackets', async () => {
  try {
    const {data} = await axios.get(API.BASE_URL);
    return data;
  } catch (err) {
    console.log(err);
  }
});
