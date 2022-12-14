import { v4 } from 'uuid';
import { BaseMethod } from '../../../common/base-method.api';
import { PostEndpointEnum } from '../../../enums/endpoint.enum';
import { TOrderRes } from '../orders.type';
import { TLimitOrderBodyDto } from './limit-order.type';
import { CurrencyPair } from '@greedy-coin/types/common';
import { anny } from '@greedy-coin/types/utils';

export class PostOrderLimitReq extends BaseMethod<TOrderRes, anny, TLimitOrderBodyDto> {
  constructor() {
    super('POST', PostEndpointEnum.ORDERS);
  }

  public setBody(body: TLimitOrderBodyDto) {
    super.setBody(body);

    return this;
  }
}

export const LIMIT = (side: 'buy' | 'sell') => ({
  symbol(symbol: CurrencyPair) {
    return {
      price(price: string) {
        return {
          size(size: string) {
            return new PostOrderLimitReq().setBody({
              clientOid: v4(),
              side,
              symbol,
              type: 'limit',
              price,
              size,
            }) as Pick<PostOrderLimitReq, 'exec'>;
          },
        };
      },
    };
  },
});
