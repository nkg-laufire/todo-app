// eslint-disable-next-line no-magic-numbers
const msPerDay = 1000 * 60 * 60 * 24;
const namedDays = ['Yesterday', 'Today', 'Tomorrow'];
const diffInDays = (left, right) => {
	const diff = Math.trunc((left - right) / msPerDay);

	return namedDays[diff + 1]
		|| `${ Math.abs(diff) } days ${ diff < 0 ? 'ago' : 'left' }`;
};

export { diffInDays };
