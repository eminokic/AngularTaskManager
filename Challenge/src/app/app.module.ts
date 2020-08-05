import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { WebRequestService } from "/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/service/WebRequestService";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

/**
 * Main module for our application. If creating any new components, be sure to declare them here.
 * If creating any new services, provide them here.
 */
@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule 
  ],
  declarations: [ 
    HomeComponent,
    HeaderComponent,
  ],
  bootstrap: [
    HomeComponent 
  ]
})
export class AppModule { 
}