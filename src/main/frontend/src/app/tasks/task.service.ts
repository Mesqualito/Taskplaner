import {HttpClient} from "@angular/common/http"
// needed every time if DI in Angular is used:
import {Injectable} from "@angular/core";
import {Task} from './task.model';

@Injectable()
export class TaskService {

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
}
