export type RootStateType = {
  hello: {
    from: {
      message: string,
      from: string,
    }[],
  },
};

export type StateHelloType = RootStateType['hello'];
