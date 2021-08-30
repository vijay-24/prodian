import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

  pic_football = 'assets/images/football.jpg';
  pic_cricket = 'assets/images/cricket.jpg';
  pic_basketball = 'assets/images/basketball.jpg';
  pic_hockey = 'assets/images/hockey.jpg';
  pic_kabadi ="assets/images/kabadi.jpg";
  pic_chess = "assets/images/chess.jpeg";

  pic_csk = "assets/images/csk3.jpg";
  

  public card_footBall:boolean = true;
  public card_cricket:boolean =true;
  public card_hockey:boolean = false;
  public card_basketBall:boolean =false;
  public card_chess:boolean = false;
  public card_kabadi:boolean =false;


 
 constructor() { 
  
 }


  ngOnInit(): void {
   
  }

 
foot="Football"
chb_Football(event: any){
  if(event.value){
    this.foot="Football";
    this.card_footBall = !this.card_footBall;
  }
  else{
    this.foot="";
     this.card_footBall = !this.card_footBall;
  }
}

cri="Cricket";
chb_cricket(event: any){
  if(event.value){
    this.cri="Cricket";
    this.card_cricket = !this.card_cricket;
  }
  else{
    this.cri="";
    this.card_cricket = !this.card_cricket;
  }
}

hoc="";
chb_hockey(event: any){
  if(event.value){
    this.hoc="Hockey";
    this.card_hockey = !this.card_hockey;
  }
  else{
    this.hoc="";
    this.card_hockey = !this.card_hockey;
  }
}

bb="";
chb_bball(event: any){
  if(event.value){
    this.bb="Basket Ball";
    this.card_basketBall = !this.card_basketBall;
  }
  else{
    this.bb="";
    this.card_basketBall = !this.card_basketBall;
  }
}

chess="";
chb_chess(event: any){
  if(event.value){
    this.chess="Chess";
    this.card_chess = !this.card_chess;
  }
  else{
    this.chess="";
    this.card_chess = !this.card_chess;
  }
}

kabadi="";
chb_kabadi(event: any){
  if(event.value){
    this.kabadi="Kabadi";
    this.card_kabadi = !this.card_kabadi;
  }
  else{
    this.kabadi="";
    this.card_kabadi = !this.card_kabadi;
  }
}

}
