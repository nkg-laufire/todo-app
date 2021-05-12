import config from './config';
import { rndString } from '@laufire/utils/random';

const { countStart, refreshIDLength } = config;

const seed = {
	count: countStart,
	refreshID: rndString(refreshIDLength),
	input: '',
};

export default seed;
