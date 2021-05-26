import { keys } from '@laufire/utils/collection';
import React from 'react';
import config from '../../core/config';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const { filters } = config;

const filterKeys = keys(filters);

const Options = (filterKey) =>
	<option key={ filterKey } value={ filterKey }>{ filterKey }</option>;

const FilterSelect = () => {
	const { todos } = context.state;
	const noTodos = TodoManager.count(todos) === 0;

	return noTodos
		? null
		:	<select
			value= {
				TodoManager.getOrderKey(context.state.filter)
			}
			onChange={
				(evt) => context.actions.setFilter(filters[evt.target.value])
			}
		>
			{ filterKeys.map(Options) }
		</select>;
};

export default FilterSelect;
