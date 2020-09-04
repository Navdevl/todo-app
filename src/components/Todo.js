import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';

function Todo({todo, removeTodo}) {

    return (
        <div>
            <span key={todo.id}>{todo.text} </span>
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon"/>
        </div>
    )
}

export default Todo
