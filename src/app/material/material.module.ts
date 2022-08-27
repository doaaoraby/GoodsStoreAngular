import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents=[
  MatTableModule,MatInputModule,MatFormFieldModule
 ];

@NgModule({
  imports:[ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
