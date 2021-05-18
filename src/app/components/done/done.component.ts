import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {

  @Input() tasks;
  @Output() updateDataEmit = new EventEmitter();


  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit() {}

  deleteTask(i){
    this.taskService.deleteTask(this.tasks[i])
    this.tasks.splice(i, 1);
  }

}
