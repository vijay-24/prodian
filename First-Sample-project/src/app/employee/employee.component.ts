import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';

import { Emp_Temp } from './emp_temp';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  imageSrc = 'assets/images/img1.jpg';
  pic_csk = "assets/images/csk3.jpg";

  dtOptions: DataTables.Settings = {};
  posts:any;

  // addForm: FormGroup;
  // formBuilder: any;
  
  
  data: Array<any>;

  id =1;
  firstname="peter";
  lastname="son";
  dob="12/12/2021";
  email="peter@gmail.com";
  mobile="9788331203";
  
 
  employee : Employee = new Employee();
// car : Employee = new Employee();
  
  
  constructor(private http: HttpClient,private myService : MyserviceService) { 
    this.goToEmployeeList();
    this.data = [
      { id :1 ,firstName: 'John', lastName: 'Doe', dob: '12/12/2010' ,email:'john@gmail.com',mobile:'9788331203'},
      { id :2 ,firstName: 'Michael', lastName: 'Smith', dob: '12/12/2010',email:'michael@gmail.com' ,mobile:'9788331203'},
      { id :3 ,firstName: 'Michael', lastName: 'Jordan', dob: '12/12/2010',email:'michael@gmail.com',mobile:'9788331203' },
      { id :4 , firstName: 'Tanya', lastName: 'Blake', dob: '12/12/2010',email: 'tanya@gmail.com',mobile:'9788331203'}
  ];

  // this.addForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   dob: ['', Validators.required],
  //   email: ['', Validators.required],
  //   mobile: ['', Validators.required]
  // });

  
  this.goToEmployeeList();
  }


  ngOnInit(): void {
    // this.employee.firstName = "Vijay";
     this.goToEmployeeList();
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };   
  }
  
  

  saveEmployee(){
    // this.employee.phone = (<HTMLInputElement>document.getElementById('mobile')).value.toString();
    this.myService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
  this.myService.findAll().subscribe(data => {
    this.users = data;
    this.data = data;
    
  });
  
  }

  deleteEmployee(id: number){
    console.log(id);
    if(id){
    this.myService.deleteEmployee(id).subscribe( data => {
      console.log(id);
      // this.getEmployees();
      this.goToEmployeeList();
    })
  }

}
 
updateEmployee() {
  console.log(this.temp_ID+"  "+this.employee);
  this.myService.updateEmployee(this.temp_ID, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.goToEmployeeList();
    }, error => console.log(error));
}

temp_ID : number;
getID(id: number){
  this.temp_ID = id;
  this.myService.getById(id)
  .subscribe(data => {
    console.log(data)
    this.employee = data;
  }, error => console.log(error));

  console.log(this.temp_ID);
}



// ------------- just get the form data
  getData(form:NgForm){
    this.saveEmployee();
    console.log(form);
    this.data.push(form);
    // console.log(this.addForm);
  }

  

  // -----DEMO
 users: Employee[];
  showData(){
    this.myService.findAll().subscribe(data => {
      this.users = data;
    });
    this.data = this.users;
    // this.emp_db = this.users;
    for(let i=0;i<this.users.length;i++)
    {
      console.log(this.data[i]);
    }
   
  }
 

 
}
