import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { ITask } from '../models/interfaces/Itask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL = 'http://localhost:3000';
  formData : Task;
  list : Task[];
  done: Task[];
  notDone: Task[];

  constructor(private http: HttpClient) {

  }

  postTask(formData : Task) {
    return this.http.post(`${this.ROOT_URL}/tasks`, formData, {observe: 'response'});
  }
  

  refreshList(){
    this.http.get(this.ROOT_URL+'/tasks')
    .toPromise().then(res => this.list = res as Task[]);
  }
  refreshDoneList(){
    if(this.formData.done == true) {
      this.http.get(this.ROOT_URL+'/tasks')
      .toPromise().then(res => this.done= res as Task[]);
    }
  }
  refreshNotDoneList(){
    if(this.formData.done != true) {
      this.http.get(this.ROOT_URL+'/tasks')
      .toPromise().then(res => this.notDone = res as Task[]);
    }
  }
  getTasks(): Observable<any> {
    return this.http.get(this.ROOT_URL+'/tasks'+this.formData);
  }
  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  putTask(formData : Task){
    return this.http.put(this.ROOT_URL+'/tasks/'+formData.id,formData);
     
   }

  deleteTask(id: number) {
    return this.http.delete(`${this.ROOT_URL}/tasks/`+id);
  }
}
