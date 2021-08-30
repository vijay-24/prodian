import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  data: Array<any>;

  firstname="peter";
  lastname="son";
  dob="12/12/2021";
  email="peter@gmail.com";
  mobile="9788331203";

  constructor(private http: HttpClient) { 
    this.data = [
      { firstName: 'John', lastName: 'Doe', dob: '12/12/2010' ,email:'john@gmail.com',mobile:'9788331203'},
      { firstName: 'Michael', lastName: 'Smith', dob: '12/12/2010',email:'michael@gmail.com' ,mobile:'9788331203'},
      { firstName: 'Michael', lastName: 'Jordan', dob: '12/12/2010',email:'michael@gmail.com',mobile:'9788331203' },
      { firstName: 'Tanya', lastName: 'Blake', dob: '12/12/2010',email: 'tanya@gmail.com',mobile:'9788331203'}
  ];
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
    });
  }

  getData(form:NgForm){
    console.log(form);
    this.data.push(form);
  }
  
 
 

}
