import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.scss'],
})
export class IncompleteComponent implements OnInit {

  newTaskText: string;
  @Input() tasks;
  @Output() updateDataEmit = new EventEmitter();

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {}

  addTask(){
    const date = new Date;
    const newTask = {
      text: this.newTaskText,
      date: date,
      done: false,
      id: this.uuidv4()
    }
    this.tasks.unshift(newTask);
    this.tasksService.createTask(newTask);
    this.newTaskText = '';
    this.updateDataEmit.emit('');
  }
  
  updateTask(value, i){
    this.tasks[i].text = value;
    this.tasksService.updateTasks(this.tasks[i]);
    this.updateDataEmit.emit('');
  }
  
  markAsDone(i){
    this.tasks[i].done = true;
    this.tasksService.updateTasks(this.tasks[i]);
    this.updateDataEmit.emit('');
  }

  uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      /* tslint:disable:one-variable-per-declaration */
      /* tslint:disable:no-bitwise */
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }

}
