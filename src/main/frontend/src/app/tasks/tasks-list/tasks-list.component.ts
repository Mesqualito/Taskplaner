import {Component, OnInit} from '@angular/core';
import {Task} from '../task.model';
import {TaskService} from "../task.service";

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

  constructor(private taskService: TaskService) { }

  ngOnInit() {

      return this.taskService.getTasks()
      // we need to call the subscribe-Method:
          .subscribe(
              // get back an array: a list of tasks
              (tasks: any[]) => {
                  // set the value from this.tasks to the response from the taskService:
                  this.tasks = tasks
              },
              (error) => console.log(error)
          );
  }

  getDueDateLabel(task: Task){

      return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {

      console.log('Task has changed');
  }
}
