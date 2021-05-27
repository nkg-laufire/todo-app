import config from '../../core/config';
import FilterBar from './filterBar';
import FilterSelect from './filterSelect';

const components = {
	button: FilterBar,
	select: FilterSelect,
};

const FilterControl = () => components[config.control]();

export default FilterControl;
