import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { TaskControllerComponent } from "./task-form/task.component"
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './task-list/task-list.component';
import { ToggleButtonComponent } from './views/toggle-button/toggle-button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

/**
 * Main module for our application. If creating any new components, be sure to declare them here.
 * If creating any new services, provide them here.
 */
@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatButtonToggleModule,
    MatButtonToggleGroup,
  ],
  declarations: [ 
    HomeComponent,
    HeaderComponent,
    TaskControllerComponent,
    TaskListComponent,
    ToggleButtonComponent
  ],
  bootstrap: [
    HomeComponent 
  ]
})
export class AppModule { 
}