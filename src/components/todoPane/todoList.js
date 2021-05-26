import { React } from 'react';
import Todo from './todo';
import config from '../../core/config';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const TodoList = () => {
	const { filters } = config.todos;
	const { todos, filter } = context.state;
	const filteredTodos = TodoManager.get(todos, filters[filter]);

	return <div>{ filteredTodos.map(Todo) }</div>;
};

export default TodoList;
