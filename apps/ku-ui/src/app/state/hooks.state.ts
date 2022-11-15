import { UiDispatch, UiState } from '@greedy-coin/types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => UiDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<UiState> = useSelector;
