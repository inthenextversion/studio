import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { GravityFinanceContractFactory } from './contracts';
import { GravityFinanceAppDefinition, GRAVITY_FINANCE_DEFINITION } from './gravity-finance.definition';

@Register.AppModule({
  appId: GRAVITY_FINANCE_DEFINITION.id,
  providers: [GravityFinanceAppDefinition, GravityFinanceContractFactory],
})
export class GravityFinanceAppModule extends AbstractApp() {}
