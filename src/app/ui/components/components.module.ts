import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [HeaderComponent, StepperComponent, SidenavComponent],
  imports: [CommonModule, CoreModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, StepperComponent, SidenavComponent],
  providers: [],
})
export class ComponentsModule {}
