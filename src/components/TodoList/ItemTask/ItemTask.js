import React, { useState } from 'react'
import './ItemTask.css';

const ItemTask = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="container-item">
            <div className="content-item">
                <label className="checkbox">
                    <input type="checkbox" defaultChecked={checked}/>
                    <span style={{marginLeft:"0.5rem"}}>{props.task.title}</span>
                </label>
                <div className="">
                    <button className="btn-detail" >
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" >
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemTask
