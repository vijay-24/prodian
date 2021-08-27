import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  football = 'assets/images/football.jpg';
  cricket = 'assets/images/cricket.jpg';
  basketball = 'assets/images/basketball.jpg';
  hockey = 'assets/images/hockey.jpg';
  


  constructor() { }

  ngOnInit(): void {
  }

}
