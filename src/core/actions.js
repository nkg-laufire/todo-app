const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const updateInputValue = (context, evt) => ({
	input: evt.target.value,
});

const actions = {
	increaseCount,
	updateInputValue,
};

export default actions;
