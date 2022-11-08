import { ActionEnum, EnvColor, HandlebarState } from '@greedy-coin/types';
import { createAction, createReducer } from '@reduxjs/toolkit';

const receive = createAction<HandlebarState>(ActionEnum.HANDLEBAR_GET);

const initialState: HandlebarState = {
  envColor: EnvColor.RED,
};

export const handlebarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(receive, (state, action) => {
      return action.payload;
    });
});
