import { BaseMethod } from '../../common/base-method.api';
import { GetEndpointEnum } from '../../enums/endpoint.enum';
import { CurrencyPair } from '@greedy-coin/types';

export type OrderBookLevel2ResDto = {
    sequence: string,
    time: number,
    bids: [string, string][], // [price，size][],
    asks: [string, string][], // [price，size][],
};

export type OrderBookLevel2ParamsDto = {
    symbol: CurrencyPair,
}

export class Level2OrderBookReq extends BaseMethod<OrderBookLevel2ResDto, OrderBookLevel2ParamsDto> {
    constructor(
        endpoint: Extract<GetEndpointEnum, GetEndpointEnum.ORDER_BOOK_LEVEL_2_100 | GetEndpointEnum.ORDER_BOOK_LEVEL_2_20 | GetEndpointEnum.ORDER_BOOK_V3_LEVEL_2>,
        symbol: CurrencyPair,
    ) {
        super('GET', endpoint, {
            symbol,
        });
    }
}
