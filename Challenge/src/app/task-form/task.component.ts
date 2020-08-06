import { Observable } from "rxjs/Observable";
import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { HttpClient } from '@angular/common/http';

import { WebRequestService} from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/service/WebRequestService'
import { Component, OnInit } from "@angular/core";

import { NgForm } from '@angular/forms';

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "task-form",
  templateUrl: "./task.component.html",
  styleUrls: ['./task.component.css']
})
export class TaskControllerComponent implements OnInit {
  current:Task = null;
  tasks: Array<Task>;
  requests: WebRequestService;
  private http: HttpClient

  constructor(private toastr: ToastrService, public service: WebRequestService) {

  }
  ngOnInit(): void {
    this.resetForm();
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
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      title: '',
      description: '',
      due: '',
      done: false
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postTask(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}