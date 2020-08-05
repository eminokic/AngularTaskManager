import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(id: number, title: string, done: boolean, description?: string, due?: string) {
    return this.http.post(`${this.ROOT_URL}/tasks`, {
      id,
      title,
      description,
      due,
      done
    }, {
        observe: 'response'
      });
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  deleteTask(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

}
