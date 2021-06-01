import { diffInDays } from '../lib/date';

test('diffInDays returns the difference between'
 + ' two days in a readable format.', () => {
	const cases = [
		['8/13/2015', '8/15/2015', '2 days ago'],
		['8/14/2015', '8/15/2015', 'Yesterday'],
		['8/15/2015', '8/15/2015', 'Today'],
		['8/16/2015', '8/15/2015', 'Tomorrow'],
		['8/17/2015', '8/15/2015', '2 days left'],
	];

	cases.forEach(([start, end, expected]) => {
		const actual = diffInDays(new Date(start), new Date(end));

		expect(actual).toEqual(expected);
	});
});
