import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import {GoodsModel} from '../models/goods-model'
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
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
  calcs= new Map<string, number>(); 
  inAmount:number=0;
  outAmount:number=0; 
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
     
    }
    onChange(event:any) {
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        if (this.file==null){
          this.errorMsg="Please upload a file"
        }
        else{
          this.errorMsg="";
          this.loading = !this.loading;
          this.fileUploadService.getGoods(this.file).subscribe(
            (x:any)=>{
              this.goodsList=x;
              this.loading = false; // Flag variable 
              this.isLoaded=true;
              this.afterUpload=true;
                }
            )
        }
       
    }
    showData(){
      console.log("hnaa",this.goodsList)
      if (!this.goodsList.includes(Number(this.goodId)) || this.goodId==null){
        this.errorMsg="the good ID you entered doesn't exist in the file";
        
      }
      else{
        this.errorMsg="";
        this.fileUploadService.getData(String(this.goodId), this.fromDate,this.toDate).
        subscribe(
          (x:any)=>{
            this.goods=x;
            this.setAmounts();
            this.isLoaded=true;
        } ,
        (error:any) => {                              
          console.error('error caught in component')
          this.goods=[];
          this.errorMsg = "No data available for the date range provided";
          this.loading = false;
          throw error;
        })
      } 
    }
  
   setAmounts(){
    this.inAmount=0;
    this.outAmount=0;
    this.goods.forEach( (good) => {
      if (good.direction=="In"){
        this.inAmount+=Number(good.amount)
      }
      else if (good.direction=="Out"){
        this.outAmount+=Number(good.amount)
      }
    });
    this.calcs.set("transNum",this.goods.length)
    this.calcs.set("inAmount",this.inAmount)
    this.calcs.set("remainAmount",this.inAmount-this.outAmount)
   }
 }
