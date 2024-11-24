import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getFixtures = createAsyncThunk('getFixtures', async () => {
  try {
    const {data} = axios.get(
      'https://d393ynejnklmr1.cloudfront.net/media/tournaments/KnockoutResponseJson.txt',
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});
