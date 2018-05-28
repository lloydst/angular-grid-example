import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmbeddedComponent } from './embedded/embedded.component';
import { RoutedComponent } from './routed/routed.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';


@NgModule({
  declarations: [
    AppComponent,
    EmbeddedComponent,
    RoutedComponent,
    SidenavComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
