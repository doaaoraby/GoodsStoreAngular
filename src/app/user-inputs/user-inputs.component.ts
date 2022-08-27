import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements OnInit {
 

  //@Output() myOutput:EventEmitter<any>= new EventEmitter();  
 
 goodId:number;  
 fromDate: Date = new Date();
 toDate: Date = new Date();

  constructor() { 
    this.goodId=null as unknown as number;
  }

  ngOnInit(): void {
  }
  
}
