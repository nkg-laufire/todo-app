import context from '../core/context';
import config from '../core/config';

const Ticker = () => {
	const start = () => {
		const { actions } = context;
		const { tickerDelay } = config;

		setInterval(() => {
			actions.addTask('New task');
		}, tickerDelay);
	};

	return {
		start,
	};
};

const ticker = Ticker();

export default ticker;
