import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { equals } from '@laufire/utils/collection';

const activeStyle = {
	background: 'lightgrey',
};

const inactiveStyle = {};

// eslint-disable-next-line react/prop-types
const FilterButton = ({ key, filter }) => {
	const { todos } = context.state;
	const noTodos = TodoManager.count(todos) === 0;

	const activeFilter = context.state.filter;
	const isActive = equals(filter, activeFilter);
	const style = isActive ? activeStyle : inactiveStyle;

	return noTodos
		? null
		:	<button style={ style } key={ key }
			onClick={ () => context.actions.todo.setFilter(filter) }>
			{ key }
		</button>;
};

export default FilterButton;
