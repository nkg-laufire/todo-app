import React from 'react';
import config from '../../core/config';
import context from '../../core/context';
import TaskManager from '../../services/taskManager';

const orderKeys = {
	none: '',
	ascending: '(Asc)',
	descending: '(Dsc)',
};

const getTargetKey = (currentKey) =>
	(currentKey !== 'ascending'
		? 'ascending'
		: 'descending');

const SortButton = () => {
	const currentKey = TaskManager.getOrderKey(context.state.order);

	return <button
		onClick={ () =>
			context.actions.task
				.setOrder(config.tasks.orders[getTargetKey(currentKey)]) }
	>Sort { orderKeys[currentKey] }</button>;
};

export default SortButton;
