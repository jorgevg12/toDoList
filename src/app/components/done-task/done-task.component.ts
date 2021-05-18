import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss'],
})
export class DoneTaskComponent implements OnInit {

  @Input() task;
  @Output() deleteTaskEmit = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  deleteTask(){
    this.deleteTaskEmit.emit();
  }

}
