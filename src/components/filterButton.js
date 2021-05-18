import { React } from 'react';
import context from '../core/context';

const FilterButton = (filter) =>
	<button onClick={ () => context.actions.setFilter(filter) }>
		{ filter }
	</button>;

export default FilterButton;
