import { keys } from '@laufire/utils/collection';
import React from 'react';
import config from '../../core/config';
import context from '../../core/context';
import TaskManager from '../../services/taskManager';

const { orders } = config.tasks;

const orderKeys = keys(orders);

const Option = (orderKey) =>
	<option key={ orderKey } value={ orderKey }>{ orderKey }</option>;

const SortSelect = () =>
	<select
		value={ TaskManager.getOrderKey(context.state.order) }
		onChange={ (evt) => context.actions.task
			.setOrder(config.tasks.orders[evt.target.value]) }
	>
		{ orderKeys.map(Option) }
	</select>;

export default SortSelect;
