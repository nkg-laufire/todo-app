import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';
import faker from 'faker';
import config from '../core/config';

const toProperCase = (txt) => txt.charAt(0).toUpperCase() + txt.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTasks = () =>
	range(1, rndBetween(0, config.maxTaskCount)).map(getRndTask);

const TaskRetriever = {
	getTasks,
};

export default TaskRetriever;
