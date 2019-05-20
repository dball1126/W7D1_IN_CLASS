import { connect } from 'react-redux';
import todoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';

const msp = state => {
    return {
        todos: allTodos(state)
    };
};

const mdp = dispatch => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos))
    };
};

export default connect(msp, mdp)(todoList);