import { Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pic_csk = "assets/images/csk3.jpg";


  time = new Date();

  intervalId: any;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

   
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
