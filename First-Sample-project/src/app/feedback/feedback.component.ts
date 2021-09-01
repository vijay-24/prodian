import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel ,FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  alldata = " this is all data";
  pic_csk = "assets/images/csk3.jpg";
  
  data:Array<any>;
  count=0;

  constructor() { 
    this.data=[{name:"",email:"bad@gmail.com",mobile:"9788645",desc:"Description"}]
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
    
})

  printFeedBack(form:NgForm){
     console.log(form);
     this.data.push(form);

    //  this is FormGroup data get format
     console.log("Login Form Name : "+this.loginForm.value['name']);
     console.log("Login Form Email : "+this.loginForm.value['email']);
    //  this is ends -----

    // console.log(this.data[1]["name"]);
     console.log(this.count);
     this.count++;
  }

}
