import { createStore, combineReducers } from 'redux';
import tasks from './reducers/tasks';

const allReducers = combineReducers({
    tasks: tasks
});

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);