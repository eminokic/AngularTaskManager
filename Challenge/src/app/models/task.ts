import { ITask } from '../models/interfaces/Itask';

export class Task implements ITask {
  id: number;  
  title: string;
  description?: string;
  due?: string;
  done: boolean;

  constructor(){ }


}