import { React } from 'react';
import context from '../core/context';

const TodoInput = () =>
	<input
		value={context.state.input}
		onChange={(evt) => context.actions.updateInput(evt.target.value)}
	/>;

export default TodoInput;
