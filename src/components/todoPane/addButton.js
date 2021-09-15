import { React } from 'react';
import context from '../../core/context';
import Remote from '../../services/remote';

const AddButton = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ () => {
			Remote.createTodo(context.state.input);
			context.actions.todo.addFromInput();
		}}>+
	</button>;

export default AddButton;
