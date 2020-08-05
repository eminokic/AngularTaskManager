import { Component, NgModule, Input } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { ITaskService } from '../service/Interfaces/Itask.service';



@Component({
  selector: "thx-home",
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
      /* An empty array that is responsible 
       to add a division */
       public items = []; 
       currentTask = "";
  
       /* A two-way binding performed which 
          pushes text on division */
       public Task; 
     
     
       handleClick(event: any) {
           this.currentTask = event.target.value;
           this.items.push(this.currentTask);
           this.currentTask = '';
       }

       /* When input is empty, it will 
          not create a new division */
       public addTask() { 
           if (this.Task == '') { 
           } 
           else { 
               this.items.push(this.Task); 
               this.Task = ''; 
           } 
       } 
     
       /* This function takes to input the 
          task, that has to be deleted*/
       public deleteTask(index) { 
           this.items.splice(index, 1); 
       } 
}
