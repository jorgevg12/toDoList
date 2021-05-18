import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncompleteComponent } from './incomplete/incomplete.component';
import { FormsModule } from '@angular/forms'; 
import { IncompleteTaskComponent } from './incomplete-task/incomplete-task.component';
import { PipesModule } from 'src/pipes/pipes.module';
import { DoneComponent } from './done/done.component';
import { DoneTaskComponent } from './done-task/done-task.component';




@NgModule({
  declarations: [
    IncompleteComponent,
    IncompleteTaskComponent,
    DoneComponent,
    DoneTaskComponent
  ],
  exports: [
    IncompleteComponent,
    IncompleteTaskComponent,
    DoneComponent,
    DoneTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
