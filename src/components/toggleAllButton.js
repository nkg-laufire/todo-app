import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;

	return <input
		type="checkbox"
		checked={ isChecked }
		onChange={ () => context.actions.toggleTodos(!isChecked) }/>;
};

export default ToggleAllButton;
