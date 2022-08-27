import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {GoodsModel} from '../models/goods-model'
import {FileUploadService} from '../file-upload.service'
import {FileUploadComponent} from '../file-upload/file-upload.component'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
//const ELEMENT_DATA: //GoodsModel[] =FileUploadService.upload();

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})

export class OutputTableComponent implements OnInit {
  @Input() goodsTable:GoodsModel[]=[];
  @Input() calculations = new Map<string, number>();
  
  //isLoaded:boolean=false;
  displayedColumns: string[] = ['goodId','transactionId','transactionDate','amount','direction','comments'];
  totalNum:number=this.goodsTable.length;
  constructor() { 
    
  }
  ngOnChanges () {

  }
  ngOnInit(): void {
  }
}



