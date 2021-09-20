import context from '../core/context';
import config from '../core/config';
import TaskRetriever from '../mocks/taskRetriver';

const start = () => {
	const { set: setTasks } = context.actions.task;
	const { tickerDelay } = config;

	setInterval(async () =>
		setTasks(await TaskRetriever.getTasks()), tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
