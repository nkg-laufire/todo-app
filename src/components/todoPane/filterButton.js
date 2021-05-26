import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const activeStyle = {
	background: 'lightgrey',
};

const inactiveStyle = {};

const FilterButton = (key) => {
	const { todos, filter } = context.state;
	const noTodos = TodoManager.count(todos) === 0;
	const style = key === filter ? activeStyle : inactiveStyle;

	return noTodos
		? null
		:	<button style={ style } key={ key }
			onClick={ () => context.actions.todo.setFilter(key) }>
			{ key }
		</button>;
};

export default FilterButton;
