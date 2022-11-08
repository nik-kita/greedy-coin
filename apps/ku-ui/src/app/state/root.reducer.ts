import { combineReducers } from 'redux';
import { handlebarReducer } from './handlebar/handlebar.reducer';

export const rootReducer = combineReducers({
  handlebar: handlebarReducer,
});
