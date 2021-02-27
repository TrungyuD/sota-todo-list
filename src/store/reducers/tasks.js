import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return state.concat([action.payload]);
        case REMOVE_TASK:
            const newState = state.filter(item => item !== action.payload);
            return newState;
        case UPDATE_TASK:
            const updateState = state.filter(item => item !== action.payload.oldTask);
            return updateState.concat([action.payload.newTask]);
        default:
            return state;
    }
}