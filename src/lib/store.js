const isSame = (left, right) => left.id === right.id;

const remove = (records, data) =>
	records.filter((record) => record.id !== data.id);

const edit = (records, data) =>
	records.map((record) => (isSame(record, data)
		? { ...record, ...data }
		: record));

export { remove, edit };
