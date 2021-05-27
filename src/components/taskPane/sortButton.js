import React from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { orderLabels } = config.tasks;

const getTargetKey = (currentKey) =>
	(currentKey !== 'ascending'
		? 'ascending'
		: 'descending');

const SortButton = () => {
	const currentKey = context.state.order;

	return <button
		onClick={ () =>
			context.actions.task
				.setOrder(getTargetKey(currentKey)) }
	> Sort: { orderLabels[currentKey] }</button>;
};

export default SortButton;
