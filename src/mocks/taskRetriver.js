import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';
import config from '../core/config';
import faker from 'faker';

const { initCount, maxCount, dueRange } = config.mocks.TaskRetriver;

const toProperCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const addDays = (date, days) => {
	const copy = new Date(date);

	copy.setDate(copy.getDate() + days);

	return copy;
};

const from = addDays(new Date(), dueRange.from);
const to = addDays(new Date(), dueRange.to);
const getRndDate = () => faker.date.between(from, to);

const build = (text) => ({
	id: rndString(config.idLength),
	text: text,
	dueOn: getRndDate(),
});

const getTasks = () =>
	range(1, rndBetween(0, maxCount)).map(() => build(getRndTask()));

const init = () =>
	range(1, initCount).map(() => build(getRndTask()));

const TaskRetriever = {
	getTasks,
	init,
};

export default TaskRetriever;
