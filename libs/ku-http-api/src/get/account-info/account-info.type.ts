import { CurrencyType } from '@coin-rime/types';

export type AccountInfoResDto = [{
  id: string,
  currency: CurrencyType,
  type: 'main' | 'trade' | 'margin' | 'pool',
  balance: string,
  available: string,
  holds: string,
}];

export class AccountInfoParamsDto {
    type?: 'main' | 'trade' | 'margin';

    currency?: CurrencyType;
}
