import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from '../features/repositoriesSlice';
import developersReducer from '../features/developersSlice';

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    developers: developersReducer,
  },
});