import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    searchReducer,
    devTools: true ,
    middleware
  },
});

export default store;