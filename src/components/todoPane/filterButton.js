import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const FilterButton = (key) => {
	const { todos, filter } = context.state;
	const noTodos = TodoManager.count(todos) === 0;
	const className = key === filter ? 'active' : 'inactive';

	return noTodos
		? null
		:	<button className={ className } key={ key }
			onClick={ () => context.actions.todo.setFilter(key) }>
			{ key }
		</button>;
};

export default FilterButton;
