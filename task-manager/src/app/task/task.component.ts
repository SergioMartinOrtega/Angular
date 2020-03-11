import { Component, OnInit } from '@angular/core';

import { TASKS } from '../mock-task';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
