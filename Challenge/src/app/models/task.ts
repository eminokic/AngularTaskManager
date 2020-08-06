/**
 * A simple task object. This will be our primary data model for this challenge
 */
export interface Task {
    /**
     * Must be a number, and is required for task items that have been persisted in the backend.
     * The backend will create this field for you when you CREATE a task. Each task will have a unique id.
     */
    id: number;
    /**
     * Required -- it must be a string
     */
    title: string;
    /**
     * Optional -- if specified, it must be a string
     */
    description?: string;
    /**
     * Optional -- if specified, it must be a string that is in a valid ISO8601 date format.
     */
    due?: string;
    /**
     * Required -- boolean specifying if a task has been completed.
     */
    done: boolean;
}