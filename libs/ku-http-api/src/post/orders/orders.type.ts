import { CurrencyPair } from '@coin-rime/types';

export type TOrderRes = {
  orderId: string,
}

export type TBaseOrderBody = {
  clientOid: string,

  side: 'buy' | 'sell',

  symbol: CurrencyPair,
};
