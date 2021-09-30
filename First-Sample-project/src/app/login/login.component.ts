import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data:Array<any>;
  
  passService : any;

  constructor(private router:Router,private myservice : MyserviceService) {
    this.data=[{email:"",pass:""}];
    
   }

  ngOnInit(): void {
  }

 dataJSON ={
   "name":"",
   "password":""
 }

   c=1;
  teststr="";
  namestr="";
  passstr="";
  onValidate(form:NgForm){
    console.log(form);
    this.data.push(form);
    console.log(this.data[this.c]["email"]+"---"+this.data[this.c]["pass"]);

    this.namestr=this.data[this.c]["email"];
    this.passstr=this.data[this.c]["pass"];
    this.dataJSON ={
      "name": this.namestr,
      "password": this.passstr
    }
    console.log("Json----- "+this.dataJSON.name);

    
    this.myservice.UserPassCheck(this.dataJSON).subscribe( data =>{
      console.log("-----------+");
      this.teststr = data;
     console.log(data);
     this.authenticationOK();
      console.log("+----------");
    },
    error => console.log(error));
   
    this.router.navigate(['/employee']);
    this.myservice.setData(this.data[this.c]["email"]+ " ^^ "+ this.data[this.c]["pass"]);
    this.c++;
    
  }
  messageShow = false;
  messageShow2=false;
  authenticationOK(){
    if(this.teststr.localeCompare(" Login not successfull !! "))
    {
      console.log(this.teststr+"=== Login not successfull !! "+(this.teststr.localeCompare("Login not successfull !!")));
      console.log("Success");
      this.messageShow2=true;
    }
    else{
      console.log(this.teststr+"=== Login not successfull !! "+(this.teststr.localeCompare("Login not successfull !!")));
      console.log("Failed");
      this.messageShow = true;
    }
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  onSubmit(form:NgForm){
    alert("working");
  }
  


}
