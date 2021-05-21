import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

// eslint-disable-next-line react/prop-types
const FilterButton = ({ key, filter }) => {
	const { todos } = context.state;
	const noTodos = TodoManager.count(todos) === 0;

	return noTodos
		? null
		:	<button key={ key }
			onClick={ () => context.actions.setFilter(filter) }>
			{ key }
		</button>;
};

export default FilterButton;
