import { React } from 'react';
import context from '../../core/context';

const getEnterKeyAction = () =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterKeyAction()](),
	Escape: () => context.actions.updateInput(''),
};

const TodoInput = () =>
	<input
		value={context.state.input}
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default TodoInput;
