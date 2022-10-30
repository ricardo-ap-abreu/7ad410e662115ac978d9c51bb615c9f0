import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkModule } from './cdk.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CdkModule, CommonModule, MaterialModule],
  exports: [CdkModule, CommonModule, MaterialModule],
})
export class CoreModule {}
