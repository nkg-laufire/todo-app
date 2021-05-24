const milliseconds = 1000;
const seconds = 15;

const config = {
	idLength: 16,
	tickerDelay: milliseconds * seconds,
	filters: {
		all: null,
		active: { completed: false },
		completed: { completed: true },
	},
	mocks: {
		TaskRetriver: {
			initCount: 5,
			maxCount: 3,
		},
	},
};

export default config;
