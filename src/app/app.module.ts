import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './ui/components/components.module';
import { HomeComponent } from './ui/pages/home/home.component';
import { MainComponent } from './ui/pages/main/main.component';
import { RoutingModule } from './ui/routing/routing.module';
import { ServiceModule } from './ui/services/service.module';

@NgModule({
  declarations: [AppComponent, MainComponent, HomeComponent],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    ServiceModule.forRoot(),
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
