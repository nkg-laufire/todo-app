import { React } from 'react';
import Remote from '../../services/remote';

const removeButton = (task) =>
	<button onClick={ () => Remote.deleteTask(task) }>X</button>;

const AddButton = (task) =>
	<button
		onClick={ () => Remote.createTodoFromTask(task) }>+
	</button>;

const Task = (task) => {
	const { id, text, dueOn } = task;

	return <div key={ id }>
		<span>{ text }</span>
		<span className="task">{ dueOn }</span>
		<span>{ AddButton(task) }</span>
		<span>{ removeButton(task) }</span>
	</div>;
};

export default Task;
