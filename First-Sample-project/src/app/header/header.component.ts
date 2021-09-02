import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pic_csk = "assets/images/csk3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
