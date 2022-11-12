import { HandlebarState } from './handlebar-state.type';
import { Store } from '@reduxjs/toolkit';

type State = {
  handlebar: HandlebarState,
}

type UiStore = Store<State>;

export type UiState = ReturnType<UiStore['getState']>;

export type UiDispatch = UiStore['dispatch'];
