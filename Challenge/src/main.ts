import { AppModule } from "./app/app.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js/dist/zone";

import { Task } from '/Users/emin/Desktop/AngularTaskManager/Challenge/src/app/models/task';
import { ITaskService } from './app/service/Interfaces/Itask.service';

/**
 * This is the main entry point for the applications. It's only job is to 'Bootstrap' our home module
 */
platformBrowserDynamic().bootstrapModule(AppModule);

function getTasks(): Promise<Task[]> {
  return Promise.resolve(TASKS); // TODO: get hero data from the server;
}
