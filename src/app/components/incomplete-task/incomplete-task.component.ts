import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.scss'],
})
export class IncompleteTaskComponent implements OnInit {

  newText;

  @Input() task;
  @Input() i;
  @Output() updateTaskEmit = new EventEmitter<string>();
  @Output() markAsDoneEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.newText = this.task.text;
  }

  updateTask(){
    this.updateTaskEmit.emit(this.newText)
  }

  markAsDone(){
    this.markAsDoneEmit.emit(this.i)
  }

}
