import { UiState } from '@greedy-coin/types';
import { configureStore } from '@reduxjs/toolkit';
import { handlebarReducer } from './handlebar/handlebar.slice';

export const store = configureStore<UiState>({
  reducer: {
    handlebar: handlebarReducer
  },
});
