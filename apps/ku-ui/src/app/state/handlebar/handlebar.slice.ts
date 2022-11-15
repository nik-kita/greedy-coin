import { EnvColor, UiState } from '@greedy-coin/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceType = UiState['handlebar'];

const initialState: SliceType = {
  envColor: EnvColor.RED,
};

export const handlebarSlice = createSlice({
  name: 'handlebar',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<EnvColor>) => {
      state.envColor = action.payload;
    }
  }
});
export const { setColor } = handlebarSlice.actions;
export const selectHandlebar = (state: UiState) => state.handlebar;
export const handlebarReducer = handlebarSlice.reducer;
