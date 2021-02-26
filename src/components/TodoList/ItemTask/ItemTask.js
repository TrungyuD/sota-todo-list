import React, { useState } from 'react'
import './ItemTask.css';
import {removeTask} from '../../../store/actions/tasks';
import { connect } from 'react-redux';

const ItemTask = ({task, removeTask}) => {
    const [checked, setChecked] = useState(false);
    const handleRemoveTask = () => {
        removeTask(task);
    }
    return (
        <div className="container-item">
            <div className="content-item">
                <label className="checkbox">
                    <input type="checkbox" defaultChecked={checked}/>
                    <span style={{marginLeft:"0.5rem"}}>{task.title}</span>
                </label>
                <div className="">
                    <button className="btn-detail" >
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" onClick={handleRemoveTask}>
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    removeTask,
}
export default connect(null, mapDispatchToProps)(ItemTask);
