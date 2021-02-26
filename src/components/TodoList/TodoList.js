import React from 'react'
import './TodoList.css';
import ItemTask from './ItemTask/ItemTask';
import { connect } from 'react-redux';

const TodoList = ({tasks}) => {
    const sortTasks = tasks.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    })
    
    return (
        <div className="list">
            <div className="content-list">
                <p className="title">To Do List</p>
                <div className="search-input">
                    <input type="text" placeholder="Search ..." id="search"/>
                </div>   
                <div>
                {
                    sortTasks.map(task => <ItemTask task={task} />)
                }
                </div>     
            </div>

            {
                true && 
                <div className="bottom-list">
                    <p className="title-bulk">Bulk Action:</p>
                    <div className="right-bottom">
                        <button className="btn-done-bottom">
                            <span className="text-btn-bottom">Done</span>
                            </button>
                            <button className="btn-remove-bottom">
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
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(TodoList);
