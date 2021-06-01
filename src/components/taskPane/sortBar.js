import { keys } from '@laufire/utils/collection';
import { React } from 'react';
import SortButton from './sortButton';
import config from '../../core/config';

const sortKeys = keys(config.tasks.orders);

const SortBar = () =>
	<div> Sort:	{	sortKeys.map(SortButton) } </div>;

export default SortBar;
