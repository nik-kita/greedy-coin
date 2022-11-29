import { RootStateType } from '@greedy-coin/types/state';
import { configureStore } from '@reduxjs/toolkit';
import { helloReducer } from './features/hello.slice';

export const store = configureStore<RootStateType>({
  reducer: {
    hello: helloReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
