import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from './material/material.module'
@NgModule({
  declarations: [
    AppComponent,
    OutputTableComponent,
    FileUploadComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpClientModule,
    FormsModule, MatDatepickerModule,ReactiveFormsModule,MaterialModule
  ],
  providers: [
    MatDatepickerModule,DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
