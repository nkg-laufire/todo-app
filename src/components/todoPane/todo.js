import { React } from 'react';
import context from '../../core/context';
import Remote from '../../services/remote';

const checkbox = (todo) =>
	<input type="checkbox" checked={ todo.completed }
		onChange={ () => context.actions.todo.toggle(todo) } />;

const removeButton = (todo) =>
	<button
		onClick={ () => Remote.deleteTodo(todo) }
	>X</button>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const className = `todo ${ completed ? 'todo-completed' : 'todo-active' }`;

	return <div key={ id } className={ className }>
		<span>{ checkbox(todo) }</span>
		<span onClick={ () =>
			context.actions.todo.setEditing(todo) }>{ text }</span>
		<span>{ removeButton(todo) }</span>
	</div>;
};

export default Todo;
