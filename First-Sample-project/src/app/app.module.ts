import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { SportComponent } from './sport/sport.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {FormBuilder } from  '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { MyserviceService } from './myservice.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    SportComponent,
    AboutComponent,
    FeedbackComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    
    MDBBootstrapModule.forRoot()
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
