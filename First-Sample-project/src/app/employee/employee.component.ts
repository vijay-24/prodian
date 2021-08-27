import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  imageSrc = 'assets/images/img1.jpg';

  firstname="peter";
  lastname="son";
  dob="12/12/2021";
  email="peter@gmail.com";
  mobile="9788331203";

  constructor() { }
  
  ngOnInit(): void {
  }

  getData(form:NgForm){
    console.log(form);
    console.log();
    
  }
  
  demo(){
    this.firstname="peter";
    this.lastname="son";
    this.dob="12/12/2021";
    this.email="peter@gmail.com";
    this.mobile="9788331203";
  }
 

}
