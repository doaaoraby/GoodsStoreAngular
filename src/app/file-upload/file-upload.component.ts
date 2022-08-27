import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import {GoodsModel,ReturnedDataModel} from '../models/goods-model'
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
  shortLink: string = "";  
  loading: boolean = false; // Flag variable
  file: File = null as unknown as File; // Variable to store file
  goods:GoodsModel[]=[];
  isLoaded:boolean=false;
  goodId:number=null as unknown as number;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  afterUpload:boolean=false;
  goodsList:number[]=[];
  errorMsg:string="";
  transNum:number=0;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null) });
  //@Output() myOutput:EventEmitter<any>= new EventEmitter();  

    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
     
    }
    onChange(event:any) {
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        this.fileUploadService.getGoods(this.file).subscribe(
        (x:any)=>{
          console.log(x)
                this.goodsList=x;
                this.loading = false; // Flag variable 
                this.isLoaded=true;
                this.afterUpload=true;
            }
        )
    }
    showData(){
      console.log("hnaa",this.goodsList)
      if (this.goodsList.includes(Number(this.goodId))){
        console.log(this.goodId,this.fromDate,this.toDate)
        this.fileUploadService.getData(String(this.goodId), this.fromDate,this.toDate).
        subscribe(
          (x:any)=>{//goodsIDs, dateRange
            console.log(x)
            this.goods=x;
            console.log(this.goods)
            // this.loading = false; // Flag variable 
            this.isLoaded=true;
            this.transNum=this.goods.length;
            //this.afterUpload=true;
        } ,
        (error:any) => {                              
          console.error('error caught in component')
          this.errorMsg = "far date range provided";
          this.loading = false;
          throw error;
        })
      }
      else{
        this.errorMsg="the good ID you entered doesn't exist in the file";
      } 
    }
    // hi(event:any){
    // this.goodId=event.goodId;
    // this.fromDate=event.fromDate;
    // this.toDate=event.toDate;
    // console.log("in hiii",this.goodId,this.fromDate,this.toDate)
    // }
   
    }
