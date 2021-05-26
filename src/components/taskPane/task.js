import { React } from 'react';
import context from '../../core/context';

const length = 10;

const readableDate = (date) => date.toISOString().substring(0, length);

const style = {
	margin: '0 0.5em',
};

const removeButton = (task) =>
	<button onClick={ () => context.actions.task.remove(task) }>X</button>;

const AddButton = (task) =>
	<button
		onClick={ () => {
			context.actions.todo.addFromTask(task);
			context.actions.task.remove(task);
		}}>+
	</button>;

const Task = (task) => {
	const { id, text, dueOn } = task;

	return <div key={ id }>
		<span>{ text }</span>
		<span style={ style }>{ readableDate(dueOn) }</span>
		<span>{ AddButton(task) }</span>
		<span>{ removeButton(task) }</span>
	</div>;
};

export default Task;
