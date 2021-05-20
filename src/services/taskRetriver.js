import { rndBetween } from '@laufire/utils/random';
import faker from 'faker';
import config from '../core/config';

const toProperCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTasks = () => {
	const count = rndBetween(0, config.maxTaskCount);
	const tasks = [];

	for(let i = 0; i < count; i++)
		tasks.push(getRndTask());

	return tasks;
};

const TaskRetriever = {
	getTasks,
};

export default TaskRetriever;
