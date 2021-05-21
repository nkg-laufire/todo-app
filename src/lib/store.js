const remove = (records, data) =>
	records.filter((record) => record.id !== data.id);

export { remove };
