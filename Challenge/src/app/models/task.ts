import { ITask } from '../models/interfaces/Itask';

export class Task implements ITask {
  id: number;  
  title: string;
  description?: string;
  due?: string;
  done: boolean;

  constructor(id: number, title: string, done: boolean, description?: string, due?: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.due = due;
    this.done = done;
  }


}