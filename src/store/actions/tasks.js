export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export function addTask(tasks) {
    return {
        type: ADD_TASK,
        payload: tasks
    }
}
export function removeTask(task) {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}