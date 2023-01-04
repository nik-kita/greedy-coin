import { configureStore } from '@reduxjs/toolkit';

export type RootState = {
  hello: {
    from: {
      message: string,
      from: string,
    }[],
  },
};
export type AppDispatch = ReturnType<typeof configureStore<RootState>>['dispatch'];

export type StateHelloType = RootState['hello'];
