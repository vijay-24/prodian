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

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceVar : any;

  // ---this is spring boot data geting url    get method
 
 
  constructor(private http: HttpClient) { 
    this.findAll();
  }
 usersUrl = 'http://localhost:8080/api/posts/show';
  /// this is the fetching method from the the db
  public findAll(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  
  //----- Addd employeee details 
addURL ='http://localhost:8080/api/posts/add';
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.addURL}`, employee);
  }

  // ----- Delete employee details
  delUrl = 'http://localhost:8080/api/posts/del';
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.delUrl}/${id}`);
  }


  // ----  Get by id 
  getByIdURL = 'http://localhost:8080/api/posts/get';
  getById(id: number): Observable<any> {
    return this.http.get(`${this.getByIdURL}/${id}`);
  }

  // ------ Updadate the details
  updateURL = 'http://localhost:8080/api/posts/add';
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateURL}/${id}`, value);
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
