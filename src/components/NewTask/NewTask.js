import React, { useState } from 'react'
import './NewTask.css';
import DatePiority from './DatePiority/DatePiority';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions/tasks';

function NewTask(props){
    const [task, setTask] = useState({
        title: "",
        description: "",
        date: new Date(),
        piority: "Normal"
    });
    const handleChange = (e) => {
        setTask({...task, [e.target.name]:e.target.value})
    }
    const setDate = (date) => {
        setTask({...task, date});
    }
    const setPiority = (piority) => {
        setTask({...task, piority});
    }
    const addNewTask = () => {
        props.addTaskAction(task)
        setTask({
            ...task,
            title: "",
            description: "",
        })
    }
    return (
        <div className="new-task">
            <p className="title">New Task</p>
            <div className="add-new-task">
                <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Add new task ..."/>
            </div>
            <div className="description">
                <label className="title-label">Description</label>
                <textarea type="text" value={task.description} name="description" onChange={handleChange}/>
            </div>
            <DatePiority date={setDate} piority={setPiority} />
            <button className="btn-add" onClick={addNewTask}>
                <span className="text-btn">Add</span>
            </button>
        </div>
    )
}
const mapDispatchToProps =  {
    addTaskAction: addTask
}
export default connect(null, mapDispatchToProps)(NewTask);
