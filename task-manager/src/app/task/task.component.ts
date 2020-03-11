import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TASKS } from '../mock-task';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //@Output() buttonClick = new EventEmitter<{ task: Task, element: HTMLButtonElement }>();
  tasks = TASKS;
  selectedTask: Task;
  constructor() { }

  ngOnInit(): void {
  }

  openModal(task: Task) {
    this.selectedTask = task;
    console.log("abierto");
  }

  deleteTask(task: Task){
    task = null;
  }

  closeModal(){
    this.selectedTask = null;
    console.log("cerrado");
  }

}
