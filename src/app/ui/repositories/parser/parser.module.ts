import { ModuleWithProviders, NgModule } from '@angular/core';
import { ClientParser } from './client.parser';

@NgModule({})
export class ParserModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ParserModule,
      providers: [ClientParser],
    };
  }
}
