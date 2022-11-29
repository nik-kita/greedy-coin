import { RootState } from '@greedy-coin/types/state';
import { configureStore } from '@reduxjs/toolkit';
import { helloReducer } from './features/hello.slice';

export const store = configureStore<RootState>({
  reducer: {
    hello: helloReducer,
  },
});
