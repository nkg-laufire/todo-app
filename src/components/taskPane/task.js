import { React } from 'react';
import context from '../../core/context';
import { diffInDays } from '../../lib/date';

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
		<span style={ style }>{ diffInDays(dueOn) }</span>
		<span>{ AddButton(task) }</span>
		<span>{ removeButton(task) }</span>
	</div>;
};

export default Task;
