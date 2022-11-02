import { ModuleWithProviders, NgModule } from '@angular/core';
import { GatewayModule } from '../gateways/gateway.module';
import { HomeRepository } from './home.repository';
import { ParserModule } from './parser/parser.module';

@NgModule({
  imports: [ParserModule.forRoot(), GatewayModule.forRoot()],
})
export class RepositoryModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: RepositoryModule,
      providers: [HomeRepository],
    };
  }
}
