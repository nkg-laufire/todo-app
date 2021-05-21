const milliseconds = 1000;
const seconds = 5;

const config = {
	idLength: 16,
	tickerDelay: milliseconds * seconds,
	maxTaskCount: 3,
	filters: {
		all: null,
		active: { completed: false },
		completed: { completed: true },
	},
};

export default config;
