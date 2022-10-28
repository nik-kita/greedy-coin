import { HandleBar } from '@greedy-coin/types';
import { createReducer, on } from '@ngrx/store';

const initialState: HandleBar = {
  hello: 'world'
};

export const handlebarReducer = createReducer(initialState);
