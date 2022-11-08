import { EnvColor, HandlebarState } from '@greedy-coin/types';
import { createReducer } from '@ngrx/store';

const initialState: HandlebarState = {
  envColor: EnvColor.RED
};

export const handlebarReducer = createReducer(initialState);
