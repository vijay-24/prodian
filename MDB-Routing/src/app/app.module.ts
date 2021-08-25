import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule,MyComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
