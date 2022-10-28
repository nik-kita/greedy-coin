import { BaseMethod } from '../../common/base-method.api';
import { DeleteEndpointEnum } from '../../enums/endpoint.enum';
import { CurrencyPair } from '@greedy-coin/types';

export type CancelAllOrdersResDto = {
    cancelledOrderIds: string[],
}

export type CancelAllOrdersParamsDto = {
    symbol?: CurrencyPair,
    tradeType?: 'TRADE' | 'MARGIN_TRADE',
}

export class CancelAllOrdersReq extends BaseMethod<CancelAllOrdersResDto, CancelAllOrdersParamsDto> {
    constructor(params?: CancelAllOrdersParamsDto) {
        super('DELETE', DeleteEndpointEnum.CANCEL_ALL_ORDERS, params);
    }
}
