import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';
import config from '../core/config';
import faker from 'faker';

const { initCount, maxCount } = config.mocks.TaskRetriver;

const toProperCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const build = (text) => ({
	id: rndString(config.idLength),
	text: text,
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
