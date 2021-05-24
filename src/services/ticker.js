import context from '../core/context';
import config from '../core/config';
import TaskRetriever from './taskRetriver';

const start = () => {
	const { addTask } = context.actions;
	const { tickerDelay } = config;

	TaskRetriever.init().map(addTask);
	setInterval(() => TaskRetriever.getTasks().map(addTask), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
