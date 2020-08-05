import { Observable } from "rxjs/Observable";
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { HttpClient } from '@angular/common/http';

import { WebRequestService} from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/service/WebRequestService'
import { create } from 'domain';

export class TaskController {
  current:Task = null;
  tasks: Array<Task>;
  requests: WebRequestService;
  private http: HttpClient

  constructor() {
    this.requests = new WebRequestService(this.http);
  }

  createTask(id: number, title: string, done: boolean, description?: string, due?: string){
    this.current.id = id;
    this.current.title = title;
    this.current.description = description;
    this.current.due = due;
    this.current.done = done;
  }

  addTask(node: Task): void {
    this.tasks.push(node);

  }
  public deleteTask(index) {
    this.tasks.splice(index, 1);   
    } 


}