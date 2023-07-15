import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Navbar } from './app-navbar.component';
import { Header } from './app-header.component';
import { Box } from './app-box.component';
import { Footer } from './app-footer.component';

@NgModule({
  declarations: [
    AppComponent, Navbar, Header, Box, Footer ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
