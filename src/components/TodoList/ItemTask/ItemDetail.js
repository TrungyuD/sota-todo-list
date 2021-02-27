import React from 'react'
import './ItemDetail.css';
import DatePiority from '../../NewTask/DatePiority/DatePiority';

const ItemDetail = ({task}) => {
    return (
        <div className="content-detail">
            <input className="title-task" type="text" value={task.title} />
            <div className="description">
                <label  className="title-label"  >Description</label>
                <textarea type="text" id="description-detail" value={task.description} />
            </div>
            <DatePiority />
            <button className="btn-update" >
                <span className="text-btn">Update</span>
            </button>
        </div>
    )
}

export default ItemDetail
