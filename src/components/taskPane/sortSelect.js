import { keys } from '@laufire/utils/collection';
import React from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { orders, orderLabels } = config.tasks;

const orderKeys = keys(orders);

const Option = (orderKey) =>
	<option
		key={ orderKey } value={ orderKey }>
		{ orderLabels[orderKey] }</option>;

const SortSelect = () =>
	<select
		value={ context.state.order }
		onChange={ (evt) => context.actions.task
			.setOrder(evt.target.value) }
	>
		{ orderKeys.map(Option) }
	</select>;

export default SortSelect;
