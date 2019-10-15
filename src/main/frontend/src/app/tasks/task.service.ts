import {HttpClient} from "@angular/common/http"
// needed every time if DI in Angular is used:
import {Injectable} from "@angular/core";

@Injectable()
export class TaskService {

    // dependency injection in Angular:
    constructor(private httpClient: HttpClient) {

    }

    getTasks(){

        return this.httpClient.get('/api/tasks');
    }
}
