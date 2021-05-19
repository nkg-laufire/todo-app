import { React } from 'react';
import context from '../core/context';

const sharedStyle = {
	height: '1em',
};

const completedStyle = {
	...sharedStyle,
	color: 'grey',
};

const activeStyle = {
	...sharedStyle,
	color: 'black',
};

const checkbox = (todo) =>
	<input type="checkbox" checked={ todo.completed }
		onChange={ () => context.actions.toggleTodo(todo) } />;

const removeButton = (todo) =>
	<button
		onClick={ () => context.actions.removeTodo(todo) }
	>X</button>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle;

	return <div key={ id } style={ style }>
		<span>{ checkbox(todo) }</span>
		<span onClick={ () => context.actions.setEditing(todo) }>{ text }</span>
		<span>{ removeButton(todo) }</span>
	</div>;
};

export default Todo;
