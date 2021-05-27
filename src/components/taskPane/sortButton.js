import React from 'react';
import context from '../../core/context';

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
	const currentKey = context.state.order;

	return <button
		onClick={ () =>
			context.actions.task
				.setOrder(getTargetKey(currentKey)) }
	>Sort { orderKeys[currentKey] }</button>;
};

export default SortButton;
