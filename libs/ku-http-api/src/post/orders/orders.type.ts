import { CurrencyPair } from '@greedy-coin/types';

export type TOrderRes = {
  orderId: string,
}

export type TBaseOrderBody = {
  clientOid: string,

  side: 'buy' | 'sell',

  symbol: CurrencyPair,
};
