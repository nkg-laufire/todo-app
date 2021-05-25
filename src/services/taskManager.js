import { findKey, equals } from '@laufire/utils/collection';
import config from '../core/config';
import { add, remove } from '../lib/store';

const { orders } = config.tasks;

const orderFns = {
	none: () => 0,
	ascending: (left, right) => left.dueOn - right.dueOn,
	descending: (left, right) => right.dueOn - left.dueOn,
};

const getOrderKey = (order) =>
	findKey(orders, (item) => equals(item, order));

const get = (tasks, order) =>
	tasks.slice().sort(orderFns[getOrderKey(order)]);

const TaskManager = {
	add,
	remove,
	get,
	getOrderKey,
};

export default TaskManager;
