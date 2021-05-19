import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ToggleAllButton = () => {
	const { todos } = context.state;
	const isChecked = TodoManager.getActiveCount(todos) === 0;
	const noTodos = TodoManager.hasNoTodos(todos);

	return noTodos
		? null
		: <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleTodos(!isChecked) }/>;
};

export default ToggleAllButton;
