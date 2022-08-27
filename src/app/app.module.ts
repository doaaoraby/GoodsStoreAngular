import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { OutputTableComponent } from './output-table/output-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    UserInputsComponent,
    OutputTableComponent,
    FileUploadComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,MatTableModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,HttpClientModule,
    FormsModule, MatDatepickerModule,MatNativeDateModule, ReactiveFormsModule,MatToolbarModule,MatButtonModule
  ],
  providers: [
    MatDatepickerModule,DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
