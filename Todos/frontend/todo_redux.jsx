import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import {merge} from 'lodash';
import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
    window.store = configureStore;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={configureStore}/>, root);
});

