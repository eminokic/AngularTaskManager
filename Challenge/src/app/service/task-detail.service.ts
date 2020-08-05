import { Observable } from "rxjs/Observable";
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { ITaskService } from "/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/service/Interfaces/Itask.service";

export class TaskDetailService implements ITaskService {

  TASKS: Task[] = [
    { id:0, title:"test", description:"test desc", due:"08.06.2020", done: false }
  ];
  
  GetAll(): Promise<import("../models/task").Task[]> | Observable<import("../models/task").Task[]> {
    throw new Error("Method not implemented.");
  }  
  Get(id: number): Promise<import("../models/task").Task> | Observable<import("../models/task").Task> {
    throw new Error("Method not implemented.");
  }
  Create(task: import("../models/task").Task): Promise<import("../models/task").Task> | Observable<import("../models/task").Task> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<boolean> | Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  Update(id: number, task: import("../models/task").Task): Promise<import("../models/task").Task> | Observable<import("../models/task").Task> {
    throw new Error("Method not implemented.");
  }


}