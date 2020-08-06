import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL = 'http://localhost:3000';
  formData : Task;
  list : Task[];

  constructor(private http: HttpClient) {

  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  postTask(formData : Task) {
    return this.http.post(`${this.ROOT_URL}/tasks`, formData, {observe: 'response'});
  }
  

  refreshList(){
    this.http.get(this.ROOT_URL+'/tasks')
    .toPromise().then(res => this.list = res as Task[]);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  putEmployee(formData : Task){
    return this.http.put(this.ROOT_URL+'/tasks/'+formData.id,formData);
     
   }

  deleteTask(id: number) {
    return this.http.delete(`${this.ROOT_URL}+'/tasks`+id);
  }

}
