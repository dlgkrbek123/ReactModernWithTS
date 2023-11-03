import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const initialzeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
  });

  return store;
};

export const useStore = () => {
  const store = useMemo(() => initialzeStore(), []);
  return store;
};
