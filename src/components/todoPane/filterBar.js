import { keys } from '@laufire/utils/collection';
import { React } from 'react';
import FilterButton from './filterButton';
import config from '../../core/config';

const { filters } = config;

const filterKeys = keys(filters);

const FilterBar = () =>
	<div>
		{
			filterKeys.map((key) =>
				FilterButton({ key: key, filter: filters[key] }))
		}
	</div>;

export default FilterBar;
