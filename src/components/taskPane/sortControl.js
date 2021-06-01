import config from '../../core/config';
import SortBar from './sortBar';
import SortSelect from './sortSelect';

const components = {
	button: SortBar,
	select: SortSelect,
};

const SortControl = () => components[config.control]();

export default SortControl;
