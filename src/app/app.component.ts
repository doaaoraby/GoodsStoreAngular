import { Component } from '@angular/core';
import {FileUploadService} from './file-upload.service'
import {GoodsModel} from './models/goods-model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
  public getGoods():GoodsModel[]{
    return this._file.goods;
  }
  isLoaded:boolean=false
 
  constructor(private _file:FileUploadService) { 
    this.gg = this.getGoods as unknown as any;
    this.isLoaded=_file.isLoaded
    }
   gg:GoodsModel[]=[];

}

