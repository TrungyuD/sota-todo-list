import React, { useEffect } from 'react'
import './TodoList.css';
import ItemTask from './ItemTask/ItemTask';
import { connect } from 'react-redux';
import {removeTask} from '../../store/actions/tasks';
import {displayBulkAction} from '../../store/actions/bulk';

const TodoList = ({tasks, bulk, removeTask, displayBulkAction}) => {
    const sortTasks = tasks.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    })
    const handleRemoveTask = () => {
        removeTask(bulk.task);
        displayBulkAction();
    }
    
    return (
        <div className="list">
            <div className="content-list">
                <p className="title">To Do List</p>
                <div className="search-input">
                    <input type="text" placeholder="Search ..." id="search"/>
                </div>   
                <div>
                {
                    sortTasks.map((task,key) => <ItemTask key={key} task={task} />)
                }
                </div>     
            </div>

            {
                bulk.isDisplay && 
                <div className="bottom-list">
                    <p className="title-bulk">Bulk Action:</p>
                    <div className="right-bottom">
                        <button className="btn-done-bottom">
                            <span className="text-btn-bottom">Done</span>
                        </button>
                        <button className="btn-remove-bottom" onClick={handleRemoveTask}>
                            <span  className="text-btn-bottom">Remove</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        bulk: state.bulk
    }
}
const mapDispatchToProps = {
    removeTask,
    displayBulkAction
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
