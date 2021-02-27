import { createStore, combineReducers } from 'redux';
import bulk from './reducers/bulk';
import tasks from './reducers/tasks';

const allReducers = combineReducers({
    tasks,
    bulk,
});

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);