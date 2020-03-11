import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TASKS } from '../mock-task';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() liClick = new EventEmitter<{ task: Task, element: HTMLSpanElement }>();

  tasks = this.taskService.list();

  selectedTask: Task;
  value = '';
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTask(value: string) {
    console.log(value);
    let newTask: Task;
    newTask = { id: 20, description: value, done: false };
    this.taskService.addTask(newTask);
  }

  openModal(task: Task) {
    this.selectedTask = task;
    console.log("abierto");
  }

  deleteTask(task: Task) {
    this.taskService.delete(task);
    this.selectedTask = null;
  }

  closeModal() {
    this.selectedTask = null;
    console.log("cerrado");
  }

  updateDes(task: Task, element: HTMLSpanElement) {
    console.log("actualizar");
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;

    const updateButton = document.createElement('i');
    updateButton.className = 'material-icons';
    updateButton.textContent = 'done';

    updateButton.onclick = () => {
      const updatedTask = { ...task };
      updatedTask.description = input.value;
      this.taskService.updateTask(updatedTask);
      element.remove();
    };

    element.appendChild(input);
    element.appendChild(updateButton);
    element.classList.add('updating');

  }

}
