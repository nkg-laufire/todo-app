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
			dueRange: {
				from: -7,
				to: 7,
			},
		},
	},
};

export default config;
