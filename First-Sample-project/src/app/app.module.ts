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

import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    SportComponent,
    AboutComponent,
    FeedbackComponent,
    HeaderComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
