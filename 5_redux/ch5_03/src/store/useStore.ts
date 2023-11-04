import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const initialzeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });

  return store;
};

export const useStore = () => {
  const store = useMemo(() => initialzeStore(), []);
  return store;
};
