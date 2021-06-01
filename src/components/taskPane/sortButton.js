import React from 'react';
import config from '../../core/config';
import context from '../../core/context';

const { orderLabels } = config.tasks;

const activeStyle = {
	background: 'lightgrey',
};

const inactiveStyle = {};

const getStyle = ({ state }, key) =>
	(state.order === key ? activeStyle : inactiveStyle);

const SortButton = (key) =>
	<button
		key = { key }
		value = { key }
		style = { getStyle(context, key) }
		onClick={ () => context.actions.task.setOrder(key) }
	>{ orderLabels[key] }</button>;

export default SortButton;
