import React from 'react'
import './NewTask.css';

const NewTask = () => {
    return (
        <div>
            <div className="content-new-task">
        <p className="title">New Task</p>
        <div className="add-input">
            <input type="text" placeholder="Add new task ..." id="add-new-task"/>
        </div>
        <div className="description">
            <label for="description-input" className="title-label">Description</label>
            <textarea type="text" id="description-input"/>
        </div>
        <button className="btn-add">
          <span className="text-btn">Add</span>
        </button>
      </div>
        </div>
    )
}

export default NewTask;
