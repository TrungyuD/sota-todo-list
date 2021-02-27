import React from 'react'
import './ItemDetail.css';
import DatePiority from '../../NewTask/DatePiority/DatePiority';

const ItemDetail = ({task}) => {
    const handleChange = () => {

    }
    return (
        <div className="content-detail">
            <input className="title-task" type="text" 
                value={task.title} onChange={handleChange}/>
            <div className="description">
                <label  className="title-label"  >Description</label>
                <textarea type="text" id="description-detail" 
                        value={task.description} 
                        onChange={handleChange}/>
            </div>
            <DatePiority isDetail={true} date={task.date} piority={task.piority}/>
            <button className="btn-update" >
                <span className="text-btn">Update</span>
            </button>
        </div>
    )
}

export default ItemDetail
