import { contains } from '@laufire/utils/collection';

const isSame = (left, right) => left.id === right.id;

const remove = (records, data) =>
	records.filter((record) => record.id !== data.id);

const removeAll = (records, selector = {}) =>
	records.filter((record) => contains(record, selector));

const edit = (records, data) =>
	records.map((record) => (isSame(record, data)
		? { ...record, ...data }
		: record));

const editAll = (
	records, data, selector = {}
) =>
	records.map((record) => (contains(record, selector)
		? { ...record, ...data }
		: record));

const count = (records, selector = {}) =>
	records.filter((record) => contains(record, selector)).length;

const isEmpty = (records) => count(records) === 0;

const get = (records, selector = {}) =>
	records.filter((record) => contains(record, selector || {}));

const add = (records, record) => records.concat(record);

export { remove, edit, count, isEmpty, editAll, removeAll, get, add };
