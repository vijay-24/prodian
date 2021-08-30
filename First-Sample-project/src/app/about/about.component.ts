import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public con_Photography:boolean = false;
  pic_csk = "assets/images/csk3.jpg";


  constructor() { }

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

  // fetchCheckedIDs() {
  //   this.checkedIDs = []
  //   this.checkboxesDataList.forEach((value, index) => {
  //     if (value.isChecked) {
  //       this.checkedIDs.push(value.id);
  //       console.log(value.id);
  //     }
  //   });
  // }


}
