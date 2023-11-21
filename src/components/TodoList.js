import React from 'react'
import './TodoList.css';
const TodoList = (props) => {
  return (
    <li className='List'>
    <p>{props.value}</p> 
    <button className='Remove' onClick={()=>props.DeleteItems(props.index)}>Remove</button>
    </li>
  )
}

export default TodoList