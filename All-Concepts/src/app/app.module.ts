import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { DropdownModule } from 'angular-bootstrap-md';
import { GmailComponent } from './gmail/gmail.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    GmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
