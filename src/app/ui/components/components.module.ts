import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SidebarNotificationsComponent } from './sidebar-notifications/sidebar-notifications.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StepperComponent,
    SearchComponent,
    SidebarNotificationsComponent,
    SidenavComponent,
  ],
  imports: [CommonModule, CoreModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    StepperComponent,
    SearchComponent,
    SidebarNotificationsComponent,
    SidenavComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
