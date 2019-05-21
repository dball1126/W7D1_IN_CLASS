import React from 'react';
import TodoForm from './todo_form';

const todoList = ({ todos = [], receiveTodo }) => {
    return (
        <div className= "todo">
            <ul className="list">
            <h1>Enter new ToDo</h1>
            {todos.map(todo => { 
                return (
                    <li className="todo-item" key={todo.id}>
                        <p>{todo.title}</p>
                    </li>
                )
            })}
            </ul>
            <TodoForm receiveTodo={receiveTodo}/>
        </div>
    );
};

export default todoList;