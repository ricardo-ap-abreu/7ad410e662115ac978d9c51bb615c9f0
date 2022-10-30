import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './ui/components/components.module';
import { RoutingModule } from './ui/routing/routing.module';
import { MainComponent } from './ui/pages/main/main.component';
import { HomeComponent } from './ui/pages/home/home.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HomeComponent],
  imports: [
    CoreModule,
    BrowserModule,
    RoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
