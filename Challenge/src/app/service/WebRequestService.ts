import { Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { ITask } from '../models/interfaces/Itask';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService implements OnInit {
  
  ngOnInit(): void {
    this.resetForm();
  }

  readonly ROOT_URL = 'http://localhost:3000';
  formData : Task;
  list : Task[];
  taskList = JSON.stringify(this.list);

  constructor(private http: HttpClient) {

  }

  postTask(formData : Task) {
    return this.http.post(`${this.ROOT_URL}/tasks`, formData, {observe: 'response'});
  }
  resetForm() {
    if (this.formData != null)
      this.resetForm();
    this.formData = {
      id: null,
      title: '',
      description: '',
      due: '',
      done: false
    }
  }

  refreshList(){
    this.http.get(this.ROOT_URL+'/tasks')
    .toPromise().then(res => this.list = res as Task[]);
  }
  getTasks(formData : Task): Observable<Task> {
    return this.http.get<Task>(this.ROOT_URL+'/tasks');
  }
  getTitle(formData:Task) {
    return this.http.get(this.ROOT_URL+'/tasks/'+formData.title);
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
