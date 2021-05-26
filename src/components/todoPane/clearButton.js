import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ClearButton = () =>
	(TodoManager.isEmpty(context.state.todos)
		? null
		: <button
			onClick={ () => context.actions.todo.clearCompleted() }>
				Clear completed
		</button>);

export default ClearButton;
