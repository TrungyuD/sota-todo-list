import { ADD_TASK, REMOVE_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return state.concat([action.payload]);
        case REMOVE_TASK:
            const new_state = state.filter(item => item !== action.payload);
            return new_state;
        default:
            return state;
    }
}