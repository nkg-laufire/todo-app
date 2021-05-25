import React from 'react';
import config from '../../core/config';
import context from '../../core/context';
import TaskManager from '../../services/taskManager';

const getTargetOrder = () =>
	(TaskManager.getOrderKey(context.state.order) !== 'ascending'
		? 'ascending'
		: 'descending');

const SortButton = () =>
	<button
		onClick={ () =>
			context.actions
				.setOrder(config.tasks.orders[getTargetOrder()]) }
	>Sort</button>;

export default SortButton;
