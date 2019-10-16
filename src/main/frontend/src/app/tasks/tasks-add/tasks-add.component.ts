import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.sass']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    // get the TaskService (task.service.ts) per DI
    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    onTaskAdd(event) {

        // event.target.value = Input-value
        let task: Task = new Task(event.target.value, false, this.getTodayAsString());
        this.taskService.addTask(task)
            .subscribe(
                (newTask: Task) => {
                    // clear the input
                    this.addTaskValue = '';
                    // update the UI
                    this.taskService.onTaskAdded.emit(newTask);
                }
            )

    }

    getTodayAsString() {

        let today = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1;
        let yyyy: any = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        return dd + '.' + mm + '.' + yyyy;
    }
}
