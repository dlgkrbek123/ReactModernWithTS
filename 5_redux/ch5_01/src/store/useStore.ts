import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
  });

  return store;
};

export const useStore = () => {
  const store = useMemo(() => initializeStore(), []);
  return store;
};
