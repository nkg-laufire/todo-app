import context from '../core/context';
import config from '../core/config';
import TaskRetriever from '../mocks/taskRetriver';

const start = () => {
	const { add: addTask } = context.actions.task;
	const { tickerDelay } = config;

	TaskRetriever.init().map(addTask);
	setInterval(() => TaskRetriever.getTasks().map(addTask), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
