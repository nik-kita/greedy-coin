import { HandlebarState } from '@greedy-coin/types';
import { createReducer, on } from '@ngrx/store';

const initialState: HandlebarState = {
  hello: 'world'
};

export const handlebarReducer = createReducer(initialState);
