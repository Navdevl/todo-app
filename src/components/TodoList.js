import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text) return;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    return (
        <div>
            <h1>What is the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            {todos.map(
                todo => (<Todo todo={todo} removeTodo={removeTodo}/>))
            }
        </div>
    )
}

export default TodoList
