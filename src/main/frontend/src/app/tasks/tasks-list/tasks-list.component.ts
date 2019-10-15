import {Component, OnInit} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

    // usual definition as object:
    // tasks {id: number, name: string, completed: boolean}[] = []
    // but we use Typescript:
    tasks: Task[] = [];

  constructor() { }

  ngOnInit() {

      this.tasks.push( new Task(1, "Aufgabe 1", true, "15/10/2019"));
      this.tasks.push( new Task(2, "Aufgabe 2", true, "15/10/2019"));
      this.tasks.push( new Task(3, "Aufgabe 3", true, "15/10/2019"));
  }

  getDueDateLabel(task: Task){

      return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {

      console.log('Task has changed');
  }
}
