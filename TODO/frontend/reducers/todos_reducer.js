import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import {merge} from 'lodash';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (oldState = initialState, action) => {
    switch(action.type) {
        case RECEIVE_TODOS:
            const { todos } = action;
            const newTodo = {};
            todos.forEach( (todo) => {
                newTodo[todo.id] = todo;
            });

            return newTodo;

        case RECEIVE_TODO:
            const { todo } = action;
            const newTodo2 = {}; //Added id; todo
            newTodo2[todo.id] = todo;
            const newState2 = merge({}, oldState, newTodo2);
            return newState2;
            
        default: 
            return oldState;
    }
};

export default todosReducer;
