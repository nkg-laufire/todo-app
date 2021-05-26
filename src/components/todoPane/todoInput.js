import { React } from 'react';
import context from '../../core/context';

const getEnterKeyAction = () =>
	(context.state.editing ? 'edit' : 'addFromInput');

const actionKeys = {
	Enter: () => context.actions.todo[getEnterKeyAction()](),
	Escape: () => context.actions.todo.setInput(''),
};

const TodoInput = () =>
	<input
		value={context.state.input}
		onChange={ (evt) => context.actions.todo.setInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default TodoInput;
