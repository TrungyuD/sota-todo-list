import React from 'react'
import './NewTask.css';
import DatePiority from './DatePiority/DatePiority';

const NewTask = () => {
    return (
        <div className="new-task">
            <p className="title">New Task</p>
            <div className="add-new-task">
                <input type="text" placeholder="Add new task ..."/>
            </div>
            <div className="description">
                <label for="description-input" className="title-label">Description</label>
                <textarea type="text"/>
            </div>
            <DatePiority />
            <button className="btn-add">
                <span className="text-btn">Add</span>
            </button>
        </div>
    )
}

export default NewTask;
