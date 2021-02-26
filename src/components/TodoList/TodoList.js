import React from 'react'
import './TodoList.css';

const TodoList = () => {
    return (
        <div className="container-list">
            <div className="content-list">
                <p className="title">To Do List</p>
                <div className="search-input">
                    <input type="text" placeholder="Search ..." id="search"/>
                </div>        
            </div>
        </div>
    )
}

export default TodoList
