import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getTodo = (text) => ({
	id: rndString(idLength),
	text: text,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const TargetManager = {
	addTodo,
};

export default TargetManager;
