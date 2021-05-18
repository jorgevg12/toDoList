import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourPipe } from './hour.pipe';



@NgModule({
  declarations: [
    HourPipe
  ],
  exports: [
    HourPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
