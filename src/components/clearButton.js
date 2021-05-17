import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ClearButton = () => {
	const { todos } = context.state;
	const noCompletedTodos = TodoManager.getCompletedCount(todos) === 0;

	return noCompletedTodos
		? null
		: <button
			onClick={ context.actions.clearCompleted }>Clear completed
	 </button>;
};

export default ClearButton;
