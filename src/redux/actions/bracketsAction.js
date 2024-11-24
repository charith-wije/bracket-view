import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getBrackets = createAsyncThunk('getBrackets', async () => {
  try {
    const {data} = await axios.get(
      'https://d393ynejnklmr1.cloudfront.net/media/tournaments/KnockoutResponseJson.txt',
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});
