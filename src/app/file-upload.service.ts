import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpErrorResponse} from '@angular/common/http';
import {GoodsModel} from './models/goods-model'
import {Observable, throwError} from 'rxjs';
import { DatePipe } from '@angular/common'
import {retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  baseApiUrl = "https://localhost:7089/"
  goods:GoodsModel[]=[];
  isLoaded:boolean=false;
  constructor(private http:HttpClient,private datepipe: DatePipe) { }

  getGoods(file:any):Observable<number[]> {
      const formData = new FormData(); 
      formData.append("file",file);
      return this.http.post<number[]>(this.baseApiUrl+"PostFile",formData );
  }
  getData(gId:string,fDate:Date,tDate:Date):Observable<GoodsModel[]>{
    
    let from_date =this.datepipe.transform(fDate, 'yyyy-MM-dd');
    let to_date =this.datepipe.transform(tDate, 'yyyy-MM-dd');
    const params = new HttpParams().set('goodId', gId)
    .set('fromDate', from_date as string)
    .set('toDate', to_date as string);
    return this.http.get<GoodsModel[]>(this.baseApiUrl+"GetData",{params} )
                    .pipe(catchError((err) => {
                      console.log('error caught in service')
                      console.error(err);
                      return throwError(err);
                    })
                  )
  }
  errorHandler(error:HttpErrorResponse){
   let errorMessage:GoodsModel[]=[];
   return throwError(() => {
      return errorMessage;
  });
  }
}
