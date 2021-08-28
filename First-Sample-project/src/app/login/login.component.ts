import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data:Array<any>;
  

  constructor(private router:Router) {
    this.data=[{email:"",pass:""}]
   }

  ngOnInit(): void {
  }
  onValidate(form:NgForm){
    console.log(form);
    this.data.push(form);
    console.log(this.data[1]["email"]);
    this.router.navigate(['/employee']);
  }

  onSubmit(form:NgForm){
    alert("working");
  }
  


}
