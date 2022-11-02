import { ModuleWithProviders, NgModule } from '@angular/core';
import { RepositoryModule } from '../repositories/repository.module';
import { ComponentsModule } from '../components/components.module';
import { HomeService } from './home.service';

@NgModule({
  imports: [RepositoryModule.forRoot(), ComponentsModule],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ServiceModule,
      providers: [HomeService],
    };
  }
}
