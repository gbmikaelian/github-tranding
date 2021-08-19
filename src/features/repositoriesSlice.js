import { createSlice } from '@reduxjs/toolkit';
import fakeApi from '../fakeApi'

export const slice = createSlice({
  name: 'repositories',
  initialState: {
    value: [],
  },
  reducers: {
    setRepositories: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setRepositories } = slice.actions;

export const getRepositories = () => async dispatch => {
  fakeApi('repositories').then((repositories) => {
    dispatch(setRepositories(repositories))
  })
};

export const selectRepositories = state => state.repositories.value;

export default slice.reducer;
