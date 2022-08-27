import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents=[
  MatTableModule,MatInputModule,MatFormFieldModule,MatNativeDateModule, MatToolbarModule,MatButtonModule
 ];

@NgModule({
  imports:[ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
