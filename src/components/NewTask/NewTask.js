import React, { useState } from 'react'
import './NewTask.css';
import DatePiority from './DatePiority/DatePiority';

const NewTask = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        date: new Date(),
        piority: ""
    });
    const handleChange = (e) => {
        setTask({...task, [e.target.name]:e.target.value})
    }
    const addNewTask = () => {
        console.log(task);
    }
    const setDate = (date) => {
        setTask({...task, date});
    }
    const setPiority = (piority) => {
        setTask({...task, piority});
    }
    return (
        <div className="new-task">
            <p className="title">New Task</p>
            <div className="add-new-task">
                <input type="text" name="title" onChange={handleChange} placeholder="Add new task ..."/>
            </div>
            <div className="description">
                <label className="title-label">Description</label>
                <textarea type="text" name="description" onChange={handleChange}/>
            </div>
            <DatePiority date={setDate} piority={setPiority}/>
            <button className="btn-add" onClick={addNewTask}>
                <span className="text-btn">Add</span>
            </button>
        </div>
    )
}

export default NewTask;
