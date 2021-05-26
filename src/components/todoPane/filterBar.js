import { keys } from '@laufire/utils/collection';
import { React } from 'react';
import FilterButton from './filterButton';
import config from '../../core/config';

const { filters } = config.todos;

const filterKeys = keys(filters);

const FilterBar = () =>
	<div>
		{
			filterKeys.map(FilterButton)
		}
	</div>;

export default FilterBar;
