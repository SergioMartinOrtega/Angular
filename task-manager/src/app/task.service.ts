import { Injectable } from '@angular/core';

import { TASKS } from './mock-task';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  list(): Task[] {
    return TASKS;
  }

  delete(task: Task){
    const id = TASKS.findIndex(value => value.id === task.id);
    TASKS.splice(id, 1);
  }

  addTask(task: Task){
    TASKS.push(task);
  }

  updateTask(task: Task){
    TASKS.push(task);
  }
}
