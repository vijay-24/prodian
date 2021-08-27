import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  alldata = " this is all data";
  

  constructor() { }

  ngOnInit(): void {
  }

  printFeedBack(form:NgForm){
      console.log(form);
     // this.alldata = form.value;
  }

}
