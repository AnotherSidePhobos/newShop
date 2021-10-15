import React from 'react'
import './Sidebar.css';
const Sidebar = () => {

    const fruitClick = () =>{
        
    }
    return (
        <div className='sidebar'>
                <h4>Categories</h4>
            <div className='sidebar_buttons'>
                <button className='btn btn-secondary'>All</button>
                <button onClick={() => fruitClick} className='btn btn-secondary'>Fruit</button>
                <button className='btn btn-secondary'>Vegetable</button>
            </div>
        </div>
    )
}

export default Sidebar
