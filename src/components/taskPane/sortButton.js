import React from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { orderLabels } = config.tasks;

const SortButton = (key) =>
	<button
		key = { key }
		value = { key }
		className = { context.state.order === key ? 'active' : 'inactive' }
		onClick={ () => context.actions.task.setOrder(key) }
	>{ orderLabels[key] }</button>;

export default SortButton;
