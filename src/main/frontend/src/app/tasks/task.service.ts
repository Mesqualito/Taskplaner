import {HttpClient} from "@angular/common/http"
// needed every time if DI in Angular is used:
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from './task.model';

@Injectable()
export class TaskService {

    // for updating the UI when new Tasks are added:
    onTaskAdded = new EventEmitter<Task>();

    // dependency injection in Angular:
    constructor(private httpClient: HttpClient) {

    }

    getTasks(){

        return this.httpClient.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {

        // set task.completed based on the value of the checkbox:
        task.completed = checked;

        // take action on the controller method which is set up in Spring Boot:
        return this.httpClient.post('/api/tasks/save', task);
    }

    addTask(task: Task) {

        return this.httpClient.post('/api/tasks/save', task);
    }
}
