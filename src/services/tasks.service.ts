import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  localUrl = 'http://localhost:3030';
  subscribableTasks;


  constructor(
    private http: HttpClient
  ) {}

  getTasks(){
    return this.http.get(this.localUrl+'/tasks')
  }

  subscribeTasks(){
    return new Promise((resolve, reject) => {
      if(this.subscribableTasks) this.subscribableTasks.unsubscribe();
      this.subscribableTasks = this.getTasks().subscribe((data:any) => {
          resolve(data);
        }, (err) =>{
          reject(err);
        });
    })
  }

  updateTasks(task){
    return new Promise((resolve, reject) => {
      this.http.patch(this.localUrl+'/tasks/'+task.id, task).subscribe((result) => {
        resolve(result)
      },(err) => {
        reject(err)
      })
    })
  }

  createTask(task){
    return new Promise((resolve, reject) => {
      this.http.post(this.localUrl+'/tasks', task).subscribe((result) =>{
        resolve(1)
      },(err) => {
        reject(err)
      })
    })
  }

  deleteTask(task){
    return new Promise((resolve, reject) => {
      this.http.delete(this.localUrl+'/tasks/'+task.id, task).subscribe((result) =>{
        resolve(1)
      },(err) => {
        reject(err)
      })
    })
  }

}
