import { React } from 'react';
import Todo from './todo';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const TodoList = () => {
	const { todos, filter } = context.state;
	const filteredTodos = TodoManager.filterTodos(todos, filter);

	return <div>{ filteredTodos.map(Todo) }</div>;
};

export default TodoList;
