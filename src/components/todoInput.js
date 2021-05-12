import { React } from 'react';
import context from '../core/context';

const TodoInput = () =>
	<input
		value={context.state.input}
		onChange={context.actions.updateInputValue}
	/>;

export default TodoInput;
