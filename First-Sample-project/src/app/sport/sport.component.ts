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
  
  selectedItemsList = [1,0];
  checkedIDs = [];

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
   
  ]


 constructor() { 
  this.selectedItemsList =[]
 }

  ngOnInit(): void {
    this.fetchSelectedItems();
    this.fetchCheckedIDs();
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
 
}
