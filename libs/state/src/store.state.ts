import { RootStateType } from '@greedy-coin/types/state';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore<RootStateType>({
  reducer: {},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
