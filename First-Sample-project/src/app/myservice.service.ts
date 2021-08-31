import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceVar : any;

  constructor(private _http: HttpClient) { }

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
