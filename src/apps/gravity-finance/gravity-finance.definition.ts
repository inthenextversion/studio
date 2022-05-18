import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const GRAVITY_FINANCE_DEFINITION = appDefinition({
  id: 'gravity-finance',
  name: 'Gravity Finance',
  description:
    'A complete suite of DeFi products, including a DEX, Farms, Auto-compounding Vaults, Launchpad, User-owned Investment Strategies and more',
  url: 'https://gravityfinance.io',
  groups: {},

  tags: [
    AppTag.DECENTRALIZED_EXCHANGE,
    AppTag.FARMING,
    AppTag.LAUNCHPAD,
    AppTag.LIQUIDITY_POOL,
    AppTag.STAKING,
    AppTag.YIELD_AGGREGATOR,
  ],

  keywords: [],
  links: {},

  supportedNetworks: {
    [Network.POLYGON_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(GRAVITY_FINANCE_DEFINITION.id)
export class GravityFinanceAppDefinition extends AppDefinition {
  constructor() {
    super(GRAVITY_FINANCE_DEFINITION);
  }
}

export default GRAVITY_FINANCE_DEFINITION;
