import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { TasksService } from 'src/services/tasks.service';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tasks = [];
  canvas;
  ctx;
  myChart; 


  constructor(
    private taskService: TasksService
  ) {}

  ngOnInit(){

    this.taskService.subscribeTasks().then((tasks:any)=>{
      this.tasks = tasks;
      this.loadChart();
    });
    
  }

  loadChart(){
    if(this.myChart) this.myChart.destroy();
    this.canvas = <HTMLCanvasElement> document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const labels = [];
    const data = [];
    this.tasks.forEach((task)=>{
      if(task.done === false){
        labels.push(moment(task.date).format('LT'));
        data.push(task.text.length); 
      }
    })
    console.log(labels);
    this.myChart = new Chart(this.ctx, {
      type: 'line',
      options: {
        responsive: false
      },
      data: {
        labels: labels,
        datasets: [{
          label: 'Chars by task',
          data: data,
          fill: false,
          borderColor: 'rgb(66,82,94)',
          tension: 0.1
        }]
      }
    });
  }
  

}
