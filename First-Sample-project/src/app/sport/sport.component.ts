import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { MyserviceService } from '../myservice.service';

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
  

  public card_FootBall:boolean = true;
  public card_Cricket:boolean =true;
  public card_Hockey:boolean = false;
  public card_BasketBall:boolean =false;
  public card_Chess:boolean = false;
  public card_Kabadi:boolean =false;

checking_var = ["card_FootBall","card_Cricket","card_Hockey","card_BasketBall","card_Chess","card_Kabadi"];
 
 constructor(private empService : MyserviceService) { 
  
 }


  ngOnInit(): void {
    this.checkboxesDataList = this.empService.getEmployee();
   
  }
  checkboxesDataList:any = [
    
  ]
 
foot="Football"
chb_Football(event: any){
  if(event.value){
    this.foot="Football";
    this.card_FootBall = !this.card_FootBall;
  }
  else{
    this.foot="";
     this.card_FootBall = !this.card_FootBall;
  }
}

cri="Cricket";
chb_cricket(event: any){
  if(event.value){
    this.cri="Cricket";
    // this.card_cricket = !this.card_cricket;
  }
  else{
    this.cri="";
    // this.card_cricket = !this.card_cricket;
  }
}

hoc="";
chb_hockey(event: any){
  if(event.value){
    this.hoc="Hockey";
    // this.card_hockey = !this.card_hockey;
  }
  else{
    this.hoc="";
    // this.card_hockey = !this.card_hockey;
  }
}

bb="";
chb_bball(event: any){
  if(event.value){
    this.bb="Basket Ball";
    // this.card_basketBall = !this.card_basketBall;
  }
  else{
    this.bb="";
    // this.card_basketBall = !this.card_basketBall;
  }
}

chess="";
chb_chess(event: any){
  if(event.value){
    this.chess="Chess";
    // this.card_chess = !this.card_chess;
  }
  else{
    this.chess="";
    // this.card_chess = !this.card_chess;
  }
}

kabadi="";
chb_kabadi(event: any){
  if(event.value){
    this.kabadi="Kabadi";
    // this.card_kabadi = !this.card_kabadi;
  }
  else{
    this.kabadi="";
    // this.card_kabadi = !this.card_kabadi;
  }
}

Save(){
  console.log("Save Successfully!!");
  this.containCheckBoxes();
}

containCheckBoxes(){
  console.log(this.checkboxesDataList[0]["label"]);
  
  for(let i=0;i<this.checkboxesDataList.length;i++){
    let k=0;
    
    if(this.checkboxesDataList[i]["isChecked"]==true)
    {
          if(i==0){
            this.card_FootBall = true;
            this.foot = "FootBall";
          }
          else if(i==1){
            this.card_Cricket=true;
            this.cri = "Cricket";
          }
          else if(i==2){
            this.card_Hockey = true;
            this.hoc = "Hockey";
          }
          else if(i==3){
            this.card_BasketBall = true;
            this.bb="BasketBall";
          }
          else if(i==4){
            this.card_Kabadi = true;
            this.kabadi="Kabadi";
          }
          else if(i==5){
            this.card_Chess = true;
            this.chess = "Chess";
          }
    }
    else
    {
      if(i==0){
        this.card_FootBall = false;
        this.foot = "";
      }
      else if(i==1){
        this.card_Cricket=false;
        this.cri = "";
      }
      else if(i==2){
        this.card_Hockey = false;
        this.hoc = "";
      }
      else if(i==3){
        this.card_BasketBall = false;
        this.bb = "";
      }
      else if(i==4){
        this.card_Kabadi = false;
        this.kabadi = "";
      }
      else if(i==5){
        this.card_Chess = false;
        this.chess = "";
      }
    }
    

  }
}

}
