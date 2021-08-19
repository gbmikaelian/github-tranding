import { createSlice } from '@reduxjs/toolkit';
import fakeApi from '../fakeApi'

export const slice = createSlice({
  name: 'developers',
  initialState: {
    value: [],
  },
  reducers: {
    setDevelopers: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setDevelopers } = slice.actions;

export const getDevelopers = () => async dispatch => {
  fakeApi('developers').then((developers) => {
    dispatch(setDevelopers(developers))
  })
};

export const selectDevelopers = state => state.developers.value;

export default slice.reducer;
