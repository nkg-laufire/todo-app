import config from '../../core/config';
import SortButton from './sortButton';
import SortSelect from './sortSelect';

const components = {
	button: SortButton,
	select: SortSelect,
};

const SortControl = () => components[config.control]();

export default SortControl;
