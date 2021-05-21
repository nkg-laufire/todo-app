import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const FilterButton = (filter) => {
	const { todos } = context.state;
	const noTodos = TodoManager.count(todos) === 0;

	return noTodos
		? null
		:	<button key={ filter }
			onClick={ () => context.actions.setFilter(filter) }>
			{ filter }
		</button>;
};

export default FilterButton;
