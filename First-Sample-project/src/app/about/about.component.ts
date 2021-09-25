import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pic_football = 'assets/images/football.jpg';
  pic_cricket = 'assets/images/cricket.jpg';
  pic_basketball = 'assets/images/basketball.jpg';
  pic_hockey = 'assets/images/hockey.jpg';
  pic_kabadi ="assets/images/kabadi.jpg";
  pic_chess = "assets/images/chess.jpeg";

  changeText1 : any;
  changeText2 :any;

  public con_Photography:boolean = false;
  pic_csk = "assets/images/csk3.jpg";

  vid_det = "assets/video/Dettol1.mp4";

  data: Array<any>;

  constructor(private myService : MyserviceService) { 

    this.data = [
      { name : 'John', orgId: '12',address : {city:'new city',state:'new state'} },
      ];

  }

  name = new FormControl('');

  myformgrp =new FormGroup({
    name: new FormControl('Krunal', Validators.maxLength(10)),
    orgId: new FormControl(26, Validators.required),
    city: new FormControl('chennai'),
    state: new FormControl('')
  });

  testing(){
    alert(this.name.value);
    console.log(this.name.value);
  }
 
 testjson= {
    "name": this.myformgrp.get('name')?.value,
    "orgId": this.myformgrp.get('orgId')?.value,
    "address": {
        "city": this.myformgrp.get('city')?.value,
        "state": this.myformgrp.get('state')?.value
    }
}
  testing1(){
   this.testjson= {
      "name": this.myformgrp.get('name')?.value,
      "orgId": this.myformgrp.get('orgId')?.value,
      "address": {
          "city": this.myformgrp.get('city')?.value,
          "state": this.myformgrp.get('state')?.value
      }
  }

    console.log(this.myformgrp.get('name')?.value);
    console.log(this.myformgrp.get('orgId')?.value);
    console.log(this.myformgrp.get('city')?.value);
    console.log(this.myformgrp.get('state')?.value);
    console.log("-----------------------");
    console.log(this.testjson.orgId);

    this.myService.oneToOneCreate(this.testjson).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    console.log(this.data[0]);
    this.myService.oneToOneShow().subscribe(data => {
      this.testjson = data;
      this.data=data;
      console.log(this.testjson);
      console.log(this.testjson);
     
      console.log("data  "+this.data[0]+this.data[2]);
      // console.log(data);
      
    });

  }

  ngOnInit(): void {
    this.fetchSelectedItems()
    // this.fetchCheckedIDs()
  }

  selectedItemsList:any;  
  checkedIDs:any; 

  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: true
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: true
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: true
    },
    {
      id: 'C004',
      label: 'Knitting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Dancing',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Gardening',
      isChecked: true
    },
    {
      id: 'C006',
      label: 'Drawing',
      isChecked: true
    },
    {
      id: 'C007',
      label: 'Gyming',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Cooking',
      isChecked: true
    },
    {
      id: 'C009',
      label: 'Scrapbooking',
      isChecked: false
    },
    {
      id: 'C010',
      label: 'Origami',
      isChecked: false
    }
  ]

    card_div =[
      {
        label: 'Origami',
        isChecked: 1
      },
      {
        label: 'Luxuary',
        isChecked: 0
      }
    ]

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {return value.isChecked});
    for(let i=0;i<this.selectedItemsList.length;i++)
    {
      console.log(this.selectedItemsList[i]["isChecked"]+"--"+this.selectedItemsList[i]["label"]);
      for(let j=0;j<this.checkboxesDataList.length;j++)
      {
       
        if(this.checkboxesDataList[j]["label"]==this.selectedItemsList[i]["isChecked"])
        {
        console.log("-----"+this.checkboxesDataList[j]["label"]+"  "+this.checkboxesDataList[j]["isChecked"]);
        }
        
      }
    }
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
