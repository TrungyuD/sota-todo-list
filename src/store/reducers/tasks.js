import { ADD_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            state.push(action.payload);
            return state;
        default:
            return state;
    }
}