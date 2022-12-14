import { RootState, SliceName, StateHelloType } from '@greedy-coin/types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: StateHelloType = {
  from: [],
};

export const helloSlice = createSlice({
  name: SliceName.HELLO,
  initialState,
  reducers: {
    hi(state, { payload }: PayloadAction<StateHelloType['from'][number]>) {
      return {
        ...state,
        from: [
          ...state.from,
          payload,
        ],
      };
    },
  },
});

export const { hi, } = helloSlice.actions;
export const helloReducer = helloSlice.reducer;
export const selectHello = (state: RootState) => state.hello;
