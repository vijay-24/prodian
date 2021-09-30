import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import {  HttpHeaders } from '@angular/common/http';

import { Emp_Temp } from './employee/emp_temp';
// import { Http, Response } from "@angular/http";
// import { Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable } from "rxjs";
import { Employee } from './employee/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceVar : any;

  // ---this is spring boot data geting url    get method
 
  // ------ this is the url
  appURL = environment.baseURL+"/api/posts";
 
  constructor(private http: HttpClient) { 
    this.findAll();
  }
//  usersUrl = 'http://localhost:8080/api/posts/show';
  /// this is the fetching method from the the db
  public findAll(): Observable<any> {
    return this.http.get(this.appURL+'/show');
  }

  
  //----- Addd employeee details 
// addURL ='http://localhost:8080/api/posts/add';
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.appURL}/add`, employee);
  }

  // ----- Delete employee details
  // delUrl = 'http://localhost:8080/api/posts/del';
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.appURL}/del/${id}`);
  }


  // ----  Get by id 
  // getByIdURL = 'http://localhost:8080/api/posts/get';
  getById(id: number): Observable<any> {
    return this.http.get(`${this.appURL}/get/${id}`);
  }

  // ------ Updadate the details
  // updateURL = 'http://localhost:8080/api/posts/add';
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.appURL}/add/${id}`, value);
  }

  oneToOneCreateURl ="http://localhost:8080/organization/create";
  // =-----------one to one mapping
  // http://localhost:8080/organization/create
  oneToOneCreate(testjson: any): Observable<Object>{
    return this.http.post(`${this.oneToOneCreateURl}`, testjson);
  }

  oneToOneShowURl ="http://localhost:8080/organization/get";
// =-----------one to one mapping
  // http://localhost:8080/organization/get
oneToOneShow(): Observable<any>{
  return this.http.get(this.oneToOneShowURl);
}

//  username and password checking  Login in sts project
// http://localhost:8080/check
UserPassCheckURL ="http://localhost:8080/check";
UserPassCheck(dataJSON: any): Observable<any>{
  return this.http.post(this.UserPassCheckURL, dataJSON,{responseType:"text"});
}

// username and password checking  Login in sts project
// http://localhost:8080/add
userRegisterURL = "http://localhost:8080/add";
userRegister(dataJSON: any): Observable<any>{
  return this.http.post(this.userRegisterURL, dataJSON,{responseType:"text"});
}


  getEmployee(){
    return  [
      {
        id: 'C001',
        label: 'FootBall',
        isChecked: true
      },
      {
        id: 'C002',
        label: 'Cricket',
        isChecked: true
      },
      {
        id: 'C003',
        label: 'Hockey',
        isChecked: false
      },
      {
        id: 'C004',
        label: 'BasketBall',
        isChecked: false
      },
      {
        id: 'C004',
        label: 'Kabadi',
        isChecked: false
      },
      {
        id: 'C005',
        label: 'Chess',
        isChecked: false
      }
      
    ];
  }

  setData(temp : any){
      this.serviceVar = temp;
  }

  getData(){
    return this.serviceVar;
  }

  


}
