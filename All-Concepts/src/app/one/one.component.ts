import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor() { }

  // Button variable
  // Button variable
  btn!: Array<any>;


  ngOnInit(): void {
    this.btn = [
      {name: "Home1",id:1},
      {name: "Profile1",id:2},
      {name: "Contact1",id:3},
      {name: "Home1",id:1},
      {name: "Profile1",id:2},
      {name: "Contact1",id:3},
      {name: "Home1",id:1},
      {name: "Profile1",id:2},
      {name: "Contact1",id:3},
      {name: "Home1",id:1},
      {name: "Profile1",id:2},
      {name: "Contact1",id:3},
      
    ]
  }

}
