import { ADD_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return state.push(action.payload.tasks);
        default:
            return state;
    }
}