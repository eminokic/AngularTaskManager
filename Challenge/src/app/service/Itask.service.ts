import { Observable } from "rxjs/Observable";
import { Task } from "../models/task";


/**
 * An interface that defines basic CRUD operations to minultate task objects.
 * You should implement this interface in a new service whose sole responsibily is
 * to interact with the mocked "backend". You can interface with the json db using angular's http library.
 *
 * The json db is hosted on port 3000. You can manually make requests to the "database" by 
 * navigating to the routes specified in the readme in your local browser
 *
 * e.g. `http://localhost:3000/tasks` to retreive all tasks.
 *
 * To learn more: https://angular.io/tutorial/toh-pt6   https://github.com/typicode/json-server
 */
export interface ITaskService {
    /**
     * Retreives all tasks from the list
     */
    GetAll(): Promise<Task[]> | Observable<Task[]>;

    /**
     * Retreives a task from the list
     * @param id Id of the task to retreive
     */
    Get(id: number): Promise<Task> | Observable<Task>;

    /**
     * Creates a new task
     * @param task The task object to create & add to list
     */
    Create(task: Task): Promise<Task> | Observable<Task>;

    /**
     * Removes a task
     * @param id Id of the task you want to remove
     */
    Delete(id: number): Promise<boolean> | Observable<boolean>;

    /**
     * Updates a task
     * @param id Id of the task you want to update
     * @param task the updated task (all fields must be present)
     */
    Update(id: number, task: Task): Promise<Task> | Observable<Task>;
}
