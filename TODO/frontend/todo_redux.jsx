import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import {merge} from 'lodash';
import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import {fetchTodos} from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
    window.store = configureStore;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
    window.fetchTodos = fetchTodos;
    const root = document.getElementById("content");
    ReactDOM.render(<Root store={configureStore}/>, root);
});

